// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "my public repositories :)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "post-when-the-metrics-have-no-mission",
        
          title: "When the Metrics Have No Mission",
        
        description: "Making the case that an imperfect goal that&#39;s used is better than none at all",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/when-the-metrics-have-no-mission/";
          
        },
      },{id: "post-a-long-form-introduction",
        
          title: "A Long-Form Introduction",
        
        description: "Reflecting on my path to data work",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/a-longer-introduction/";
          
        },
      },{id: "post-a-future-place-for-data-thoughts",
        
          title: "A Future Place for Data Thoughts",
        
        description: "Setting some intentions for 2024",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/a-future-place/";
          
        },
      },{id: "news-joined-the-city-of-boston-analytics-team-as-a-data-analyst",
          title: 'Joined the City of Boston Analytics Team as a Data Analyst! 📈',
          description: "",
          section: "News",},{id: "news-promoted-to-performance-manager",
          title: 'Promoted to Performance Manager 🎉',
          description: "",
          section: "News",},{id: "news-co-presented-building-a-data-ethics-culture-at-the-city-of-boston-with-joey-headley-at-bari-24",
          title: 'Co-presented “Building a Data (Ethics) Culture at the City of Boston” with Joey...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6D%79%6C%65%69%67%68%68%6F%6F%64%37@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/amy-hood", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/amy-hood-110479102", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
