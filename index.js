"use strict";
  var url = "https://api.nasa.gov/planetary/apod?api_key=Lvq2wzAwzC6r8gvvb052EFxKH1boCbSescq0iLIu";
  var classname = document.querySelectorAll('div > div');
  var menu = document.getElementById('menu');
  var menuClose = document.getElementById('menuClose');
  var overlay = document.getElementById('overlay');
  var grid = document.getElementsByClassName('grid_container')[0];
  var div_2_8 = document.getElementsByClassName('flex');
  var divs = Array.from(div_2_8).slice(1);
  var menuDiv = Array.from(document.querySelectorAll('.col_1 > div'));
  var menuText = document.querySelectorAll('h1');
  var num = 0;
  var zelda = document.getElementsByClassName('zelda');
  var backZel = document.getElementById('zelda')
  var count = 0;
  backZel.addEventListener('click',function(e) {
    console.log(e)
    backZel.className += ' displayHidden';
  });
// <section id="zelda" class="zeldaGrid displayHidden">
  function addZeldaClass() {
    backZel.className = backZel.className.slice(0,10);
  }

  function incrementToOne() {
    console.log(this)
    if(!this.count) {
      this.count = 1;
      count++
    }
    else if(count === 5){
      count = 0;
      addZeldaClass()
    }
  }
  Array.from(zelda).forEach(function(element) {
    element.addEventListener('mouseover',incrementToOne)
  })

  Array.from(classname).slice(4).forEach(function(element) {
    element.addEventListener('mouseover', addClassToDiv);
    element.addEventListener('click', removeClassFromDiv);
    element.addEventListener('mouseout', removeClassFromDiv);
  });

  var addClassToOverlay = function() {
    overlay.className += " show";
    grid.className += ' opacity';
    menuClose.className = menuClose.className.slice(0,16);
    menu.className += ' hidden';
    divs.forEach(function(el) {
      el.className += ' hidden';
    });
    menuDiv.forEach(function(el) {
      el.className += ' move';
    })
    Array.from(menuText).forEach(function(ele) {
      ele.className = ele.className.slice(0,10);
    })
  };

  var removeClassFromOverlay = function() {
    overlay.className = 'hide';
    grid.className = 'grid_container';
    menuClose.className = 'fa fa-times menu hidden';
    menu.className = 'fa fa-bars menu';
    menuDiv.forEach(function(el) {
      el.className = el.className.slice(0,1);
    })
    divs.forEach(function(el) {
      el.className = el.className.slice(0,10);
    });
    Array.from(menuText).forEach(function(ele) {
      ele.className += ' hidden';
    })
  }

  menu.addEventListener('click', addClassToOverlay);
  menuClose.addEventListener('click', removeClassFromOverlay)

  var addClassToDiv = function() {
    this.className += " active";
  };

  var removeClassFromDiv = function() {
    this.className = this.className.slice(0,1);
  }


  Array.from(classname).slice(4).forEach(function(element) {
    element.addEventListener('mouseover', addClassToDiv);
    element.addEventListener('click', removeClassFromDiv);
    element.addEventListener('mouseout', removeClassFromDiv);
  });


























// var list = document.getElementsByClassName("h");
// var arr = Array.from(list);
//
// function getImages (url, date) {
//   var dateArray = ['2017-09-16','2017-10-16','2017-12-16'];
//   arr.forEach(function(el, ind) {
//     fetch(url)
//   })
//   fetch(url)
//     .then((resp) => resp.json()) // Transform the data into json
//     .then(function(data) {
//       arr.forEach(function( ele, index) {
//         ele.style.backgroundSize = "cover";
//         ele.style.backgroundPosition = "contain"
//         ele.style.backgroundImage = "url(" + `${data.url}` + ")";
//         console.log(data)
//       })
//     })
// }
