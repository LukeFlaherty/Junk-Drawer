const addBtnElem = document.querySelector(".add-junk-btn");
const viewListElem = document.querySelector(".view-list-btn");
const backToOptionsBtn = document.querySelector(".back-btn");
const listBlockElem = document.querySelector(".view-list");
const clearBtn = document.querySelector(".clear-btn");
const listElem = document.querySelector(".junk-list");
const btnsElem = document.querySelector(".btns");

addBtnElem.addEventListener("click", (e) => addJunkToDrawer(e));
viewListElem.addEventListener("click", (e) => viewJunkDrawer(e));
clearBtn.addEventListener("click", (e) => emptyDrawer(e));
backToOptionsBtn.addEventListener("click", (e) => navigateToOptions(e));

const readLocalStorage = (key) => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get([key], function (result) {
      if (result[key] === undefined) {
        resolve([]);
      } else {
        resolve(result[key]);
      }
    });
  });
};

const addJunkToDrawer = async () => {
  try {
    const queryOptions = { active: true, currentWindow: true };
    const [tab] = await chrome.tabs.query(queryOptions);
    const { title, url, favIconUrl } = tab;
    console.log(title);
    let postsAdded = await readLocalStorage("junkItems");
    console.log(postsAdded);
    const junkAlreadyInDrawer =
      postsAdded &&
      postsAdded.findIndex((item) => item.title === title && item.url === url);
    if (junkAlreadyInDrawer === -1) {
      const id = new Date().getTime();
      postsAdded = [...postsAdded, { title, url, favIconUrl, id }];
      await chrome.storage.local.set({ junkItems: [...postsAdded] }, () => {
        console.log("junk added");
      });
    }
    return;
  } catch (err) {
    console.log(err);
  }
};

const viewJunkDrawer = async () => {
  try {
    btnsElem.style.display = "none";
    listBlockElem.style.display = "block";
    const postsAdded = await readLocalStorage("junkItems");
    if (postsAdded.length > 0) {
      for (let i = 0; i < postsAdded.length; i++) {
        const post = postsAdded[i];
        let li = document.createElement("li");
        let img = document.createElement("img");
        let contentDiv = document.createElement("div");
        let p = document.createElement("p");
        let button = document.createElement("button");

        img.src = post.favIconUrl;
        img.alt = post.title;
        img.classList = ["junk-img"];

        button.textContent = "Remove";
        button.addEventListener("click", (event) => removeJunk(event, post.id));

        p.textContent = post.title;

        contentDiv.classList = ["content"];
        contentDiv.appendChild(p);
        contentDiv.appendChild(button);

        li.classList = ["junk"];
        li.setAttribute("id", post.id);
        li.addEventListener("click", (event) => {
          event.stopPropagation();
          window.open(post.url);
        });
        li.appendChild(img);
        li.appendChild(contentDiv);

        listElem.appendChild(li);
      }
    } else {
      listElem.innerHTML = '<p class="msg"> No posts saved! </p>';
    }
  } catch (err) {
    console.log(err);
  }
};

const removeJunk = async (event, id) => {
  try {
    event.stopPropagation();
    const postsAdded = await readLocalStorage("junkItems");
    const updatedPosts = postsAdded.filter((post) => post.id !== id);
    await chrome.storage.local.set({ junkItems: [...updatedPosts] }, () => {
      console.log("junk removed");
    });
    listElem.innerHTML = "";
    viewJunkDrawer();
  } catch (err) {
    console.log(err);
  }
};

const navigateToOptions = () => {
  btnsElem.style.display = "flex";
  listBlockElem.style.display = "none";
  listElem.innerHTML = "";
};

const emptyDrawer = async () => {
  try {
    await chrome.storage.local.clear();
    listElem.innerHTML = "";
    viewJunkDrawer();
  } catch (err) {
    console.log(err);
  }
};
