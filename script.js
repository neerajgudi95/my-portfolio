const projectLinks = [
  {
    elementId: "netf-demo-link",
    elementLink: "https://netflix-react-clone-76187.firebaseapp.com/",
  },
  {
    elementId: "netf-code-link",
    elementLink: "https://github.com/neerajgudi95/REACT-NETFLIX-CLONE",
  },
  {
    elementId: "slack-demo-link",
    elementLink: "https://slack-app-clone-7aef9.firebaseapp.com/",
  },
  {
    elementId: "slack-code-link",
    elementLink: "https://github.com/neerajgudi95/REACT-SLACK-CLONE",
  },
  {
    elementId: "twitter-demo-link",
    elementLink: "https://twitterreactclone.herokuapp.com/",
  },
  {
    elementId: "twitter-code-link",
    elementLink: "https://github.com/neerajgudi95/REACT-TWITTER-CLONE",
  },
  {
    elementId: "covid-demo-link",
    elementLink: "https://react--covid19tracker.herokuapp.com/",
  },
  {
    elementId: "covid-code-link",
    elementLink: "https://github.com/neerajgudi95/REACT-COVID-TRACKER",
  },
  {
    elementId: "ip-demo-link",
    elementLink: "https://prod.d1onjsdq6bgnll.amplifyapp.com/",
  },
  {
    elementId: "ip-code-link",
    elementLink:
      "https://github.com/neerajgudi95/REACT-IP-TRACKER/tree/main/react-ip-tracker",
  },
  {
    elementId: "crytpo-demo-link",
    elementLink: "https://react-crypto-manager.netlify.app/",
  },
  {
    elementId: "crypto-code-link",
    elementLink: "https://github.com/neerajgudi95/REACT-CRYPTO-MANAGER",
  },
  {
    elementId: "resume",
    elementLink: "https://rb.gy/xv6wnu",
  },
];

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () =>
  document.body.classList.toggle("dark")
);

projectLinks.forEach((link) => {
  document.getElementById(link.elementId).onclick = () =>
    window.open(link.elementLink, "_blank");
});

let selectedIds = ["nav-btn-mobile", "nav-link"];
selectedIds.forEach((id) => {
  document.getElementById(id).onclick = () => {
    document.getElementById("open").classList.toggle("show");
    document.getElementById("close").classList.toggle("show");
    document.getElementById("nav-link").classList.toggle("show");
  };
});
