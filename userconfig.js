let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    "location": "Москва, Россия",
    "scale": "C"
  },
  clock: {
    "format": "H:i",
    "iconColor": "#ea6962"
},
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://yandex.ru/search/?text=", "Yandex"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://chat.deepseek.com/",
  openLastVisitedTab: true,
  tabs: [
      {
        name: "chi ll",
        background_url: "src/img/banners/bg-3.gif",
        categories: [{
          name: "Social Media",
          links: [
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube-filled",
            icon_color: "#ea6962",
          },
          {
            name: "habr",
            url: "https://habr.com/ru/feed/",
            icon: "brand-stackshare",
            icon_color: "#0566f7ff",
          }]      
        },
        {
          name: "Game",
          links: [
          {
            name: "steam",
            url: "https://www.youtube.com/",
            icon: "brand-steam",
            icon_color: "#7077d1ff",
          }
        ],
      }],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "repositories",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#7daea3",
            }
          ],
        }
      ],
    },
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "mails",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "storage",
          links: [
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
              icon: "brand-google-drive",
              icon_color: "#e78a4e",
            },
            {
              name: "fotos",
              url: "https://photos.google.com/u/1",
              icon: "photo-filled",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "stuff",
          links: [
            {
              name: "google docs",
              url: "https://docs.google.com/document/",
              icon: "file",
              icon_color: "#4285F4",
            }
          ],
        }
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
