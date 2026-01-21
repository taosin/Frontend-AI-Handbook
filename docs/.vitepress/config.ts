import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Frontend AI Handbook',
  description: 'A practice-driven guide exploring how AI empowers modern frontend engineering',
  
  // 多语言配置
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      link: '/',
      title: 'Frontend AI Handbook',
      description: '一本由实践驱动的指南，旨在探索和记录人工智能如何深度赋能现代前端工程'
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'Frontend AI Handbook',
      description: 'A practice-driven guide exploring and documenting how artificial intelligence deeply empowers modern frontend engineering'
    }
  },

  // 主题配置
  themeConfig: {
    // 多语言导航栏
    nav: [
      { text: '中文版', link: '/' },
      { text: 'English', link: '/en/' }
    ],

    // 侧边栏配置（中文版）
    sidebar: {
      '/': [
        {
          text: '序言',
          link: '/zh/00-序言/README'
        },
        {
          text: '第一部分：理念篇',
          items: [
            {
              text: '第一章：重新理解"开发"',
              link: '/zh/01-理念篇/第一章-重新理解开发/README'
            },
            {
              text: '第二章：AI 赋能前端的三层模型',
              link: '/zh/01-理念篇/第二章-AI赋能前端的三层模型/README'
            }
          ]
        },
        {
          text: '第二部分：工具篇',
          items: [
            {
              text: '第三章：AI 编程助手深度评测',
              link: '/zh/02-工具篇/第三章-AI编程助手深度评测/README'
            },
            {
              text: '第四章：提示词工程',
              link: '/zh/02-工具篇/第四章-提示词工程/README'
            }
          ]
        },
        {
          text: '第三部分：工程篇',
          items: [
            {
              text: '第五章：智能开发与架构',
              link: '/zh/03-工程篇/第五章-智能开发与架构/README'
            },
            {
              text: '第六章：智能测试与质量保障',
              link: '/zh/03-工程篇/第六章-智能测试与质量保障/README'
            },
            {
              text: '第七章：智能运维与性能',
              link: '/zh/03-工程篇/第七章-智能运维与性能/README'
            }
          ]
        },
        {
          text: '第四部分：应用篇',
          items: [
            {
              text: '第八章：在浏览器中运行 AI 模型',
              link: '/zh/04-应用篇/第八章-在浏览器中运行AI模型/README'
            },
            {
              text: '第九章：集成大语言模型（LLM）',
              link: '/zh/04-应用篇/第九章-集成大语言模型/README'
            },
            {
              text: '第十章：新兴交互范式',
              link: '/zh/04-应用篇/第十章-新兴交互范式/README'
            }
          ]
        },
        {
          text: '第五部分：最佳实践与案例库',
          items: [
            {
              text: '第十一章：个人效率革命',
              link: '/zh/05-最佳实践与案例库/第十一章-个人效率革命/README'
            },
            {
              text: '第十二章：团队协作升级',
              link: '/zh/05-最佳实践与案例库/第十二章-团队协作升级/README'
            },
            {
              text: '第十三章：完整项目案例研究',
              link: '/zh/05-最佳实践与案例库/第十三章-完整项目案例研究/README'
            }
          ]
        },
        {
          text: '第六部分：资源与未来',
          items: [
            {
              text: '第十四章：持续学习资源',
              link: '/zh/06-资源与未来/第十四章-持续学习资源/README'
            },
            {
              text: '第十五章：趋势展望与职业建议',
              link: '/zh/06-资源与未来/第十五章-趋势展望与职业建议/README'
            }
          ]
        },
        {
          text: '附录',
          link: '/zh/附录/README'
        }
      ],
      '/en/': [
        {
          text: 'Preface',
          link: '/en/00-Preface/README'
        },
        {
          text: 'Part 1: Concepts',
          items: [
            {
              text: 'Chapter 1: Reunderstanding "Development"',
              link: '/en/01-Concepts/'
            },
            {
              text: 'Chapter 2: The Three-Layer Model',
              link: '/en/01-Concepts/'
            }
          ]
        }
        // 英文版侧边栏可以后续完善
      ]
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/taosin/Frontend-AI-Handbook' }
    ],

    // 搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          },
          en: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search documentation'
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear query',
                footer: {
                  selectText: 'select',
                  navigateText: 'navigate'
                }
              }
            }
          }
        }
      }
    },

    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Frontend AI Handbook'
    }
  }
})
