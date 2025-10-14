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
      background_url: "src/img/banners/cbg-13.gif",
      categories: [{
        name: "Social Media",
        links: [
          {
            name: "whatsapp",
            url: "https://web.whatsapp.com/",
            icon: "brand-whatsapp",
            icon_color: "#a9b665",
          },
          {
            name: "twitter",
            url: "https://twitter.com/home",
            icon: "brand-twitter-filled",
            icon_color: "#7daea3",
          },
          {
            name: "reddit",
            url: "https://www.reddit.com/",
            icon: "brand-reddit",
            icon_color: "#e78a4e",
          },
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube-filled",
            icon_color: "#ea6962",
          },
          {
            name: "twitch",
            url: "https://www.twitch.tv/",
            icon: "brand-twitch",
            icon_color: "#d3869b",
          },
        ],
      }, {
        name: "Games",
        links: [
          {
            name: "chess",
            url: "https://www.chess.com/home",
            icon: "chess-queen-filled",
            icon_color: "#a9b665",
          },
          {
            name: "monkeytype",
            url: "https://monkeytype.com/",
            icon: "keyboard",
            icon_color: "#e78a4e",
          },
          {
            name: "tetris",
            url: "https://tetris.com/",
            icon: "brand-apple-arcade",
            icon_color: "#ea6962",
          },
        ],
      }, {
        name: "Video",
        links: [
          {
            name: "disney+",
            url: "https://www.disneyplus.com/home",
            icon: "brand-disney",
            icon_color: "#7daea3",
          },
          {
            name: "primevideo",
            url: "https://www.primevideo.com/region/eu/?ref_=dv_web_unknown",
            icon: "brand-amazon",
            icon_color: "#7daea3",
          },
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
            },
            {
              name: "gitlab",
              url: "https://gitlab.com/",
              icon: "brand-gitlab",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "phind",
              url: "https://www.phind.com/",
              icon: "brand-openai",
              icon_color: "#89b482",
            },
            {
              name: "flutter",
              url: "https://docs.flutter.dev/ui",
              icon: "brand-flutter",
              icon_color: "#7daea3",
            },
            {
              name: "hacktricks",
              url: "https://book.hacktricks.xyz/welcome/readme",
              icon: "biohazard",
              icon_color: "#ea6962",
            },
            {
              name: "vscode",
              url: "https://vscode.dev/",
              icon: "brand-vscode",
              icon_color: "#7daea3",
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "hackthebox",
              url: "https://app.hackthebox.com",
              icon: "box",
              icon_color: "#a9b665",
            },
            {
              name: "cryptohack",
              url: "https://cryptohack.org/challenges/",
              icon: "brain",
              icon_color: "#e78a4e",
            },
            {
              name: "tryhackme",
              url: "https://tryhackme.com/dashboard",
              icon: "brand-onedrive",
              icon_color: "#ea6962",
            },
            {
              name: "hackerrank",
              url: "https://www.hackerrank.com/dashboard",
              icon: "code-asterix",
              icon_color: "#a9b665",
            },
          ],
        },
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
              name: "dropbox",
              url: "https://www.dropbox.com/h?role=personal&di=left_nav",
              icon: "box-seam",
              icon_color: "#7daea3",
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
  name: "google_docs",
  links: [
    {
      name: "google_docs",
      url: "https://docs.google.com/document/",
      icon: "brand-google", // или другой подходящий иконка
      icon_color: "#4285F4", // синий цвет Google
    },
    {
      name: "google_sheets",
      url: "https://docs.google.com/spreadsheets/",
      icon: "brand-google-drive",
      icon_color: "#0F9D58", // зеленый цвет Google
    },
    {
      name: "google_slides",
      url: "https://docs.google.com/presentation/",
      icon: "brand-google-drive", 
      icon_color: "#DB4437", // красный цвет Google
    },
    {
      name: "google_forms",
      url: "https://docs.google.com/forms/",
      icon: "brand-google-drive",
      icon_color: "#FF6D01", // оранжевый цвет Google
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
