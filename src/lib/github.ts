export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  topics: string[]
  created_at: string
  updated_at: string
  pushed_at: string
  private: boolean
  fork: boolean
  default_branch: string
  homepage: string | null
  size: number
  watchers_count: number
  open_issues_count: number
  license: {
    key: string
    name: string
    spdx_id: string
    url: string
    node_id: string
  } | null
  owner: {
    login: string
    id: number
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
  }
}

export interface GitHubUser {
  login: string
  id: number
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string | null
  company: string | null
  blog: string | null
  location: string | null
  email: string | null
  hireable: boolean | null
  bio: string | null
  twitter_username: string | null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

export interface GitHubStats {
  totalStars: number
  totalForks: number
  totalRepos: number
  languages: { [key: string]: number }
  contributions: number
}

const GITHUB_USERNAME = 'Aybdell' // Your actual GitHub username

class GitHubService {
  private baseUrl = 'https://api.github.com'
  private headers = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'Portfolio-App',
  }

  async fetchWithTimeout(url: string, timeout = 5000): Promise<Response> {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeout)

    try {
      const response = await fetch(url, {
        headers: this.headers,
        signal: controller.signal,
      })
      clearTimeout(timeoutId)
      return response
    } catch (error) {
      clearTimeout(timeoutId)
      throw error
    }
  }

  async getUserRepos(): Promise<GitHubRepo[]> {
    try {
      const response = await this.fetchWithTimeout(
        `${this.baseUrl}/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated&direction=desc`
      )
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('Error fetching repositories:', error)
      // Return mock data for development
      return this.getMockRepos()
    }
  }

  async getUserInfo(): Promise<GitHubUser> {
    try {
      const response = await this.fetchWithTimeout(
        `${this.baseUrl}/users/${GITHUB_USERNAME}`
      )
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('Error fetching user info:', error)
      return this.getMockUser()
    }
  }

  getRepoLanguage(repos: GitHubRepo[]): { [key: string]: number } {
    const languages: { [key: string]: number } = {}
    
    repos.forEach(repo => {
      if (repo.language) {
        languages[repo.language] = (languages[repo.language] || 0) + 1
      }
    })
    
    return languages
  }

  getRepoStats(repos: GitHubRepo[]): GitHubStats {
    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)
    const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0)
    const languages = this.getRepoLanguage(repos)
    
    return {
      totalStars,
      totalForks,
      totalRepos: repos.length,
      languages,
      contributions: 0 // Would need GitHub GraphQL API for this
    }
  }

  getProjectStatus(repo: GitHubRepo): 'In Development' | 'Code Available' | 'Private Project' {
    if (repo.private) return 'Private Project'
    if (repo.fork) return 'Code Available'
    if (repo.open_issues_count > 0 || repo.description?.includes('WIP') || repo.description?.includes('TODO')) {
      return 'In Development'
    }
    return 'Code Available'
  }

  getProjectDescription(repo: GitHubRepo): string {
    if (repo.description) {
      return repo.description
    }
    
    // Generate description based on repo name and topics
    const name = repo.name.replace(/[-_]/g, ' ')
    const topics = repo.topics.slice(0, 3).join(', ')
    
    if (topics) {
      return `A ${name} project built with ${topics}`
    }
    
    return `A ${name} project`
  }

  getTechStack(repo: GitHubRepo): string[] {
    const tech: string[] = []
    
    if (repo.language) {
      tech.push(repo.language)
    }
    
    // Add common tech based on topics
    const topicToTech: { [key: string]: string } = {
      'react': 'React',
      'nextjs': 'Next.js',
      'typescript': 'TypeScript',
      'tailwind': 'Tailwind CSS',
      'nodejs': 'Node.js',
      'express': 'Express',
      'mongodb': 'MongoDB',
      'postgresql': 'PostgreSQL',
      'python': 'Python',
      'django': 'Django',
      'vue': 'Vue.js',
      'nuxt': 'Nuxt.js',
      'graphql': 'GraphQL',
      'prisma': 'Prisma',
      'vercel': 'Vercel',
      'aws': 'AWS',
      'docker': 'Docker',
      'kubernetes': 'Kubernetes',
      'redis': 'Redis',
      'mysql': 'MySQL',
      'sqlite': 'SQLite',
      'jwt': 'JWT',
      'oauth': 'OAuth',
      'stripe': 'Stripe',
      'twilio': 'Twilio',
      'sendgrid': 'SendGrid',
      'aws-lambda': 'AWS Lambda',
      'cloudflare': 'Cloudflare',
      'netlify': 'Netlify',
      'heroku': 'Heroku',
    }
    
    repo.topics.forEach(topic => {
      const techName = topicToTech[topic.toLowerCase()]
      if (techName && !tech.includes(techName)) {
        tech.push(techName)
      }
    })
    
    return tech.slice(0, 6) // Limit to 6 technologies
  }

  // Mock data for development
  private getMockRepos(): GitHubRepo[] {
    return [
      {
        id: 1,
        name: 'ophthalmology-platform',
        full_name: 'Aybdell/ophthalmology-platform',
        description: 'Full-stack healthcare application for ophthalmology clinics with patient management, appointments, medical records, and consultation tracking.',
        html_url: 'https://github.com/Aybdell/ophthalmology-platform',
        stargazers_count: 8,
        forks_count: 3,
        language: 'TypeScript',
        topics: ['react', 'nodejs', 'express', 'postgresql', 'healthcare', 'medical'],
        created_at: '2023-06-15T00:00:00Z',
        updated_at: '2024-02-10T00:00:00Z',
        pushed_at: '2024-02-08T00:00:00Z',
        private: false,
        fork: false,
        default_branch: 'main',
        homepage: 'https://ophthalmology-demo.vercel.app',
        size: 1250,
        watchers_count: 8,
        open_issues_count: 2,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZQ=='
        },
        owner: {
          login: 'Aybdell',
          id: 123456,
          avatar_url: 'https://avatars.githubusercontent.com/u/123456?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/Aybdell',
          html_url: 'https://github.com/Aybdell',
          followers_url: 'https://api.github.com/users/Aybdell/followers',
          following_url: 'https://api.github.com/users/Aybdell/following{/other_user}',
          gists_url: 'https://api.github.com/users/Aybdell/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/Aybdell/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/Aybdell/subscriptions',
          organizations_url: 'https://api.github.com/users/Aybdell/orgs',
          repos_url: 'https://api.github.com/users/Aybdell/repos',
          events_url: 'https://api.github.com/users/Aybdell/events{/privacy}',
          received_events_url: 'https://api.github.com/users/Aybdell/received_events{/privacy}',
          type: 'User',
          site_admin: false
        }
      },
      {
        id: 2,
        name: 'university-management',
        full_name: 'Aybdell/university-management',
        description: 'Academic management system for student administration, course registration, and institutional functions. Built for reliability in educational environments.',
        html_url: 'https://github.com/Aybdell/university-management',
        stargazers_count: 5,
        forks_count: 2,
        language: 'PHP',
        topics: ['php', 'mysql', 'html', 'css', 'javascript', 'education', 'academic'],
        created_at: '2023-09-20T00:00:00Z',
        updated_at: '2024-01-15T00:00:00Z',
        pushed_at: '2024-01-10T00:00:00Z',
        private: false,
        fork: false,
        default_branch: 'main',
        homepage: null,
        size: 890,
        watchers_count: 5,
        open_issues_count: 1,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZQ=='
        },
        owner: {
          login: 'Aybdell',
          id: 123456,
          avatar_url: 'https://avatars.githubusercontent.com/u/123456?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/Aybdell',
          html_url: 'https://github.com/Aybdell',
          followers_url: 'https://api.github.com/users/Aybdell/followers',
          following_url: 'https://api.github.com/users/Aybdell/following{/other_user}',
          gists_url: 'https://api.github.com/users/Aybdell/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/Aybdell/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/Aybdell/subscriptions',
          organizations_url: 'https://api.github.com/users/Aybdell/orgs',
          repos_url: 'https://api.github.com/users/Aybdell/repos',
          events_url: 'https://api.github.com/users/Aybdell/events{/privacy}',
          received_events_url: 'https://api.github.com/users/Aybdell/received_events{/privacy}',
          type: 'User',
          site_admin: false
        }
      },
      {
        id: 3,
        name: 'portfolio',
        full_name: 'Aybdell/portfolio',
        description: 'Modern responsive portfolio website with smooth animations and a premium dark theme. Built with React, Tailwind CSS, and Framer Motion.',
        html_url: 'https://github.com/Aybdell/portfolio',
        stargazers_count: 12,
        forks_count: 3,
        language: 'JavaScript',
        topics: ['react', 'tailwindcss', 'framer-motion', 'portfolio', 'responsive'],
        created_at: '2023-12-01T00:00:00Z',
        updated_at: '2024-02-18T00:00:00Z',
        pushed_at: '2024-02-16T00:00:00Z',
        private: false,
        fork: false,
        default_branch: 'main',
        homepage: 'https://ayoubdell.vercel.app',
        size: 450,
        watchers_count: 12,
        open_issues_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZQ=='
        },
        owner: {
          login: 'Aybdell',
          id: 123456,
          avatar_url: 'https://avatars.githubusercontent.com/u/123456?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/Aybdell',
          html_url: 'https://github.com/Aybdell',
          followers_url: 'https://api.github.com/users/Aybdell/followers',
          following_url: 'https://api.github.com/users/Aybdell/following{/other_user}',
          gists_url: 'https://api.github.com/users/Aybdell/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/Aybdell/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/Aybdell/subscriptions',
          organizations_url: 'https://api.github.com/users/Aybdell/orgs',
          repos_url: 'https://api.github.com/users/Aybdell/repos',
          events_url: 'https://api.github.com/users/Aybdell/events{/privacy}',
          received_events_url: 'https://api.github.com/users/Aybdell/received_events{/privacy}',
          type: 'User',
          site_admin: false
        }
      }
    ]
  }

  private getMockUser(): GitHubUser {
    return {
      login: 'Aybdell',
      id: 123456,
      avatar_url: 'https://avatars.githubusercontent.com/u/123456?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Aybdell',
      html_url: 'https://github.com/Aybdell',
      followers_url: 'https://api.github.com/users/Aybdell/followers',
      following_url: 'https://api.github.com/users/Aybdell/following{/other_user}',
      gists_url: 'https://api.github.com/users/Aybdell/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/Aybdell/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Aybdell/subscriptions',
      organizations_url: 'https://api.github.com/users/Aybdell/orgs',
      repos_url: 'https://api.github.com/users/Aybdell/repos',
      events_url: 'https://api.github.com/users/Aybdell/events{/privacy}',
      received_events_url: 'https://api.github.com/users/Aybdell/received_events{/privacy}',
      type: 'User',
      site_admin: false,
      name: 'Ayoub Dell',
      company: null,
      blog: null,
      location: 'Algeria',
      email: 'ayoub40dell@gmail.com',
      hireable: true,
      bio: 'Frontend developer focused on building modern, scalable web applications',
      twitter_username: null,
      public_repos: 5,
      public_gists: 3,
      followers: 25,
      following: 12,
      created_at: '2022-01-01T00:00:00Z',
      updated_at: '2024-02-19T00:00:00Z'
    }
  }
}

export const githubService = new GitHubService()
export default githubService
