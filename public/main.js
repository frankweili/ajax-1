let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`); //此处用反引号
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n += 1;
    }
  };
  request.send();
}; //这是分页加载的功能

getCss.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onload = () => {
    const style = document.createElement("style");
    style.innerHTML = request.response;
    document.head.appendChild(style);
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};

getJs.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/2.js");
  request.onload = () => {
    const script = document.createElement("script");
    script.innerHTML = request.response;
    document.body.appendChild(script);
  };
  request.onerror = () => {};
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/3.html");
  request.onload = () => {
    const div = document.createElement("div");
    div.innerHTML = request.response;
    document.body.appendChild(div);
  };
  request.onerror = () => {};
  request.send();
};

getXml.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      //&&是并且的意思  ；不报错，操作下面的;
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text);
    }
  };
  request.send();
};

getJson.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/5.json"); //get大小都可以
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const object = JSON.parse(request.response);
      myName.textContent = object.name;
    }
  };
  request.send();
};
