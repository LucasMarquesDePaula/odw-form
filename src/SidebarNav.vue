<template>
  <ul class="sidebar-nav metismenu">
    <li class="sidebar-brand">
      <a href="#">
        Start Bootstrap
      </a>
    </li>
    <li>
      <a class="has-arrow" href="#">
        Input
      </a>
      <ul aria-expanded="true">
        <li>
          <a href="#/fields/autocomplete">
            Autocomplete
          </a>
        </li>
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
          <a href="#/fields/mask">
            Mask
          </a>
        </li>
        <li>
          <a href="#/fields/date-picker">
            DatePicker
          </a>
        </li>
        <li>
          <a href="#/fields/datetime-picker">
            DateTimePicker
          </a>
        </li>
        <li>
          <a href="#/fields/time-picker">
            TimePicker
          </a>
        </li>
      </ul>
    </li>
    <li>
      <a class="has-arrow" href="#">
        Select
      </a>
      <ul aria-expanded="true">
        <li>
          <a href="#/fields/select">
            Select
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import "metismenu/dist/metisMenu.min.css"
const $ = window.$ = window.jQuery = require("jquery")
require("metismenu")

export default {
  name: "sidebar-nav",
  mounted() {
    $(this.$el).metisMenu()
  }
}
</script>

<style lang="scss">
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
