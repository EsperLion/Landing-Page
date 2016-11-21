app.controller('BlogController', ['$route', '$routeParams', '$location', '$data', function( $route, $routeParams, $location, $data){
  var blogCtrl = this;

  blogCtrl.tags = ['js', 'html/css', 'php', 'managment', 'SEO', 'SMM'];

  blogCtrl.cats = ['WEB', 'Business', 'Photography', 'Journal', 'ALL'];

  blogCtrl.activeCat = 'ALL';

  blogCtrl.activeTags = [];

  blogCtrl.activePost = $data.getPost() != null ? $data.getPost() : null;
  
  // blogCtrl.activeComms = $data.getComms() != null ? $data.getComms() : [];

  blogCtrl.posts = {
    "0": {
      category:  blogCtrl.cats[1],
      tags: [
        blogCtrl.tags[3],
        blogCtrl.tags[4],
        blogCtrl.tags[5]
      ],
      date: "20.10.2016",
      img: '',
      header: 'Lorem ipsum.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis tempora dolor dolorem totam deleniti tempore, corporis excepturi nam maxime ea nostrum assumenda nobis, eos molestias vero perferendis debitis repellat voluptatem, repudiandae dolorum aliquam animi. Itaque quas, earum voluptate culpa aut qui quidem saepe non quisquam!',
      likes: 15,
      comments: 5
    },
    "1": {
      category: blogCtrl.cats[0],
      tags: [
        blogCtrl.tags[0],
        blogCtrl.tags[1],
        blogCtrl.tags[2]
      ],
      date: "01.03.2016",
      img: '',
      header: 'Loreasdm ipsum.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis tempora dolor dolorem totam deleniti tempore, corporis excepturi nam maxime ea nostrum assumenda nobis, eos molestias vero perferendis debitis repellat voluptatem, repudiandae dolorum aliquam animi. Itaque quas, earum voluptate culpa aut qui quidem saepe non quisquam!',
      likes: 7,
      comments: 5
    },
    "2": {
      category: blogCtrl.cats[2],
      tags: [
        blogCtrl.tags[1],
        blogCtrl.tags[3],
        blogCtrl.tags[5]
      ],
      date: "18.07.2016",
      img: '',
      header: 'Loasdrem ipsum.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis tempora dolor dolorem totam deleniti tempore, corporis excepturi nam maxime ea nostrum assumenda nobis, eos molestias vero perferendis debitis repellat voluptatem, repudiandae dolorum aliquam animi. Itaque quas, earum voluptate culpa aut qui quidem saepe non quisquam!',
      likes: 7,
      comments: 5
    },
    "3": {
      category: blogCtrl.cats[3],
      tags: [
        blogCtrl.tags[2],
        blogCtrl.tags[5],
        blogCtrl.tags[1]
      ],
      date: "12.07.2016",
      img: '',
      header: 'Lorhghgem ipsum.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis tempora dolor dolorem totam deleniti tempore, corporis excepturi nam maxime ea nostrum assumenda nobis, eos molestias vero perferendis debitis repellat voluptatem, repudiandae dolorum aliquam animi. Itaque quas, earum voluptate culpa aut qui quidem saepe non quisquam!',
      likes: 7,
      comments: 5
    },
    "4": {
      category: blogCtrl.cats[1],
      tags: [
        blogCtrl.tags[3],
        blogCtrl.tags[1]
      ],
      date: "18.06.2016",
      img: '',
      header: 'afgsdfLorem ipsum.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis tempora dolor dolorem totam deleniti tempore, corporis excepturi nam maxime ea nostrum assumenda nobis, eos molestias vero perferendis debitis repellat voluptatem, repudiandae dolorum aliquam animi. Itaque quas, earum voluptate culpa aut qui quidem saepe non quisquam!',
      likes: 7,
      comments: 5
    },
    "5": {
      category: blogCtrl.cats[0],
      tags: [
        blogCtrl.tags[0],
        blogCtrl.tags[3],
        blogCtrl.tags[4]
      ],
      date: "13.05.2016",
      img: '',
      header: '343Loresdfgm ipsum.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis tempora dolor dolorem totam deleniti tempore, corporis excepturi nam maxime ea nostrum assumenda nobis, eos molestias vero perferendis debitis repellat voluptatem, repudiandae dolorum aliquam animi. Itaque quas, earum voluptate culpa aut qui quidem saepe non quisquam!',
      likes: 0,
      comments: 5
    },
    "6": {
      category: blogCtrl.cats[2],
      tags: [
        blogCtrl.tags[2],
        blogCtrl.tags[4],
      ],
      date: "18.07.2016",
      img: '',
      header: '4tga4Lorem ipsum.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis tempora dolor dolorem totam deleniti tempore, corporis excepturi nam maxime ea nostrum assumenda nobis, eos molestias vero perferendis debitis repellat voluptatem, repudiandae dolorum aliquam animi. Itaque quas, earum voluptate culpa aut qui quidem saepe non quisquam!',
      likes: 7,
      comments: 5
    },
    "7": {
      category: blogCtrl.cats[3],
      tags: [
        blogCtrl.tags[3],
        blogCtrl.tags[5],
        blogCtrl.tags[1]
      ],
      date: "17.01.2015",
      img: '',
      header: 'ag4gaLorem ipsum.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis tempora dolor dolorem totam deleniti tempore, corporis excepturi nam maxime ea nostrum assumenda nobis, eos molestias vero perferendis debitis repellat voluptatem, repudiandae dolorum aliquam animi. Itaque quas, earum voluptate culpa aut qui quidem saepe non quisquam!',
      likes: 17,
      comments: 5
    },
    "8": {
      category: blogCtrl.cats[0],
      tags: [
        blogCtrl.tags[0],
        blogCtrl.tags[1],
        blogCtrl.tags[3]
      ],
      date: "18.07.2014",
      img: '',
      header: 'argatLorem ipsum.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis tempora dolor dolorem totam deleniti tempore, corporis excepturi nam maxime ea nostrum assumenda nobis, eos molestias vero perferendis debitis repellat voluptatem, repudiandae dolorum aliquam animi. Itaque quas, earum voluptate culpa aut qui quidem saepe non quisquam!',
      likes: 0,
      comments: 5
    },
    "9": {
      category: blogCtrl.cats[2],
      tags: [
        blogCtrl.tags[1],
        blogCtrl.tags[2],
        blogCtrl.tags[5]
      ],
      date: "31.07.2014",
      img: '',
      header: 'ar4gagaLorem ipsum.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis tempora dolor dolorem totam deleniti tempore, corporis excepturi nam maxime ea nostrum assumenda nobis, eos molestias vero perferendis debitis repellat voluptatem, repudiandae dolorum aliquam animi. Itaque quas, earum voluptate culpa aut qui quidem saepe non quisquam!',
      likes: 3,
      comments: 5
    },
    "10": {
      category: blogCtrl.cats[3],
      tags: [
        blogCtrl.tags[2],
        blogCtrl.tags[3],
        blogCtrl.tags[5]
      ],
      date: "09.11.2016",
      img: '',
      header: 'a4ga4ag4gaLorem ipsum.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis tempora dolor dolorem totam deleniti tempore, corporis excepturi nam maxime ea nostrum assumenda nobis, eos molestias vero perferendis debitis repellat voluptatem, repudiandae dolorum aliquam animi. Itaque quas, earum voluptate culpa aut qui quidem saepe non quisquam!',
      likes: 25,
      comments: 4
    }
  };

  blogCtrl.comments = [];
  
  blogCtrl.initializeComms = function () {
    var k = 0;
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 55; i++) {
      for (var j = 0; j < 15; j++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      
      blogCtrl.comments[i] = {
        comm_id: i,
        post_id: k++,
        date: Math.floor((Math.random() * 28) + 1) + "." + Math.floor((Math.random() * 12) + 1) + "." + Math.floor((Math.random() * (2020 - 2015)) + 2015),
        text: text
      };
      k = k == 11 ? 0 : k;
      text = "";
    }
  };
  blogCtrl.initializeComms();

  blogCtrl.checkNum = function (cat) {
    var num = 0;
    for (key in blogCtrl.posts) {
      if (cat == blogCtrl.posts[key].category)
        num++;
    }
    console.log(num);
    num = num == 0 ? Object.keys(blogCtrl.posts).length : num;
    return num;
  };
  
  blogCtrl.checkTags = function (tags) {
    if (blogCtrl.activeTags.length > 0) {
      for (var i = 0; i < blogCtrl.activeTags.length; i++) {
        for (var j = 0; j < tags.length; j++) {
          if (blogCtrl.activeTags[i] == tags[j])
            return true;
        }
      }
      return false;
    } else {
      return true;
    }
  };

  blogCtrl.tagClick = function (tag) {
    var buf = [];
    if (blogCtrl.activeTags.indexOf(tag) == -1) {
      blogCtrl.activeTags.push(tag);
    } else {
      for (var i = 0; i < blogCtrl.activeTags.length; i++) {
        if (blogCtrl.activeTags[i] != tag)
          buf.push(blogCtrl.activeTags[i]);
      }
      blogCtrl.activeTags = [];
      blogCtrl.activeTags = buf;
    }
  };

  blogCtrl.chooseCat = function (cat) {
    blogCtrl.activeCat = cat;
  };

  blogCtrl.show = function (cat, tags) {
    if (blogCtrl.activeCat == cat) {
      if (blogCtrl.activeTags.length > 0) {
        return blogCtrl.checkTags(tags);
      } else {
        return true;
      }
    } else {
      if (blogCtrl.activeCat == '') {
        if (blogCtrl.activeTags.length > 0) {
          return blogCtrl.checkTags(tags);
        } else {
          return true;
        }
      }else {
        return false;
      }
    }
  };

  blogCtrl.likePost = (function () {
    var clicked = false;
    return function (post) {
      if (!clicked) 
        post.likes++;
      else 
        post.likes--;
      clicked = !clicked;
    };
  })();
}]);

app.filter('customOrderBy', function () {
  return function (items, field, reverse) {
    var filtered = [];
    
    angular.forEach(items, function (item) {
      filtered.push(item);
    });


    filtered.sort(function (a, b) {
      if (field == 'likes') {
        if (a[field] > b[field])
          return 1;
        else if (a[field] < b[field])
          return -1;
        else
          return 0;
      } else {
        var a1 = a[field].split('.');
        var b1 = b[field].split('.');
        if (a1[2] > b1[2])
          return 1;
        else if (a1[2] < b1[2])
          return -1;
        else if (a1[1] > b1[1])
          return 1;
        else if (a1[1] < b1[1])
          return -1;
        else if (a1[0] > b1[0])
          return 1;
        else if (a1[0] < b1[0])
          return -1;
        else
          return 0;
      }
    });

    if (reverse)
      return filtered.reverse();

    return filtered;
  };
});


app.filter('catFilter', function () {
  return function (items, field, reverse) { 
     var filtered = [];

    angular.forEach(items, function (item) {
      if (item.category == field)
        filtered.push(item);
      else if (field == "ALL") 
        filtered.push(item);
    });

    console.log(field);
    console.log(filtered);
    return filtered;
  };
});