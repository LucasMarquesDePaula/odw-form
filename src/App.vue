<template>
  <div id="wrapper">
    <!-- Sidebar -->
    <div id="sidebar-wrapper">
      <ul class="sidebar-nav metismenu">
        <li class="sidebar-brand">
          <a href="#">
            Start Bootstrap
          </a>
        </li>
        <li>
          <a class="has-arrow" href="#">
            Fields
          </a>
          <ul aria-expanded="true">
            <li>
              <a href="#/fields/field">
                Field
              </a>
            </li>
            <li>
              <a href="#/fields/input">
                Input
              </a>
            </li>
            <li>
              <a href="https://github.com/onokumus/metisMenu">
                <span class="fa fa-fw fa-star"></span> Star
              </a>
            </li>
            <li>
              <a href="https://github.com/onokumus/metisMenu/issues">
                <span class="fa fa-fw fa-exclamation-triangle"></span> Issues
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a class="has-arrow" href="#" aria-expanded="false">Menu 0</a>
          <ul aria-expanded="false">
            <li>
              <a href="#">item 0.1</a>
            </li>
            <li>
              <a href="#">item 0.2</a>
            </li>
            <li>
              <a href="http://onokumus.com">onokumus</a>
            </li>
            <li>
              <a href="#">item 0.4</a>
            </li>
          </ul>
        </li>
        <li id="removable">
          <a class="has-arrow" href="#" aria-expanded="false">Menu 1</a>
          <ul aria-expanded="false">
            <li>
              <a href="#">item 1.1</a>
            </li>
            <li>
              <a href="#">item 1.2</a>
            </li>
            <li>
              <a class="has-arrow" href="#" aria-expanded="false">Menu 1.3</a>
              <ul aria-expanded="false">
                <li>
                  <a href="#">item 1.3.1</a>
                </li>
                <li>
                  <a href="#">item 1.3.2</a>
                </li>
                <li>
                  <a href="#">item 1.3.3</a>
                </li>
                <li>
                  <a href="#">item 1.3.4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">item 1.4</a>
            </li>
            <li>
              <a class="has-arrow" href="#" aria-expanded="false">Menu 1.5</a>
              <ul aria-expanded="false">
                <li>
                  <a href="#">item 1.5.1</a>
                </li>
                <li>
                  <a href="#">item 1.5.2</a>
                </li>
                <li>
                  <a href="#">item 1.5.3</a>
                </li>
                <li>
                  <a href="#">item 1.5.4</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a class="has-arrow" href="#" aria-expanded="false">Menu 2</a>
          <ul aria-expanded="false">
            <li>
              <a href="#">item 2.1</a>
            </li>
            <li>
              <a href="#">item 2.2</a>
            </li>
            <li>
              <a href="#">item 2.3</a>
            </li>
            <li>
              <a href="#">item 2.4</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- /#sidebar-wrapper -->
  
    <!-- Page Content -->
    <div id="page-content-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
    <!-- /#page-content-wrapper -->
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css"
import "metismenu/dist/metisMenu.min.css"
import "font-awesome/css/font-awesome.css"

const $ = window.$ = window.jQuery = require("jquery")
require("bootstrap")
require("metismenu")

export default {
  name: "app",
  mounted() {
    const $el = $(this.$el)
    $el.toggleClass("toggled")
    $el.find(".metismenu").metisMenu()
  }
}
</script>

<style lang="scss">
body {
  overflow-x: hidden;
}

#wrapper {
  -moz-transition: all .5s ease;
  -o-transition: all .5s ease;
  -webkit-transition: all .5s ease;
  padding-left: 0;
  transition: all .5s ease;
  &.toggled {
    padding-left: 250px;

    #sidebar-wrapper {
      width: 250px;
    }

    #page-content-wrapper {
      margin-right: -250px;
      padding: 15px;
      position: absolute;
      width: 100%;
    }
  }
}

#sidebar-wrapper {
  -moz-transition: all .5s ease;
  -o-transition: all .5s ease;
  -webkit-transition: all .5s ease;
  background: #000;
  height: 100%;
  left: 250px;
  margin-left: -250px;
  overflow-y: auto;
  position: fixed;
  transition: all .5s ease;
  width: 0;
  z-index: 1000;
}

.sidebar-nav {
  background: #212529;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0 10px 0 0;
  position: absolute;
  top: 0;
  width: 250px;

  ul {
    background: #343a40;
    list-style: none;
    margin: 0;
    padding: 0;
    a {
      padding-left: 5px;
    }
    ul a {
      padding-left: 15px;
    }
    ul ul a {
      padding-left: 25px;
    }
  }

  li {
    line-height: 36px;
    text-indent: 10px;

    >li {
      -ms-flex-direction: column;
      -webkit-box-direction: normal;
      -webkit-box-orient: vertical;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    +li,
    &:first-child {
      margin-top: 5px;
    }

    &:last-child {
      margin-bottom: 5px;
    }

    span {
      text-indent: 0;
    }

    a {
      color: #adb5bd;
      display: block;
      outline-width: 0;
      position: relative;
      transition: all .3s ease-out;

      &:hover {
        background: rgba(255, 255, 255, 0.2);
        color: #fff;
        text-decoration: none;
      }

      &:active,
      &:focus {
        text-decoration: none;
      }

      &:hover,
      &:focus,
      &:active {
        background: #0b7285;
        color: #f8f9fa;
        text-decoration: none;
      }
    }
  }
  >.sidebar-brand {
    font-size: 18px;
    height: 65px;
    line-height: 60px;
    a {
      color: #999;
      &:hover {
        background: none;
        color: #fff;
      }
    }
  }
}
</style>
