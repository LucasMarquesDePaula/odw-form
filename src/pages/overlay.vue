<template>
  <div>
    <h4>Overlay</h4>
    <of-switch label="Hidden" v-model="hidden" name="hidden" />
    <of-switch label="Dismissible" v-model="dismissible" name="dismissible" />
    <div class="panel panel-default">

      <of-overlay class="bg-info" v-model="hidden" :is-dismissible="dismissible">
        <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
        <p>Conteúdo do overlay</p>
      </of-overlay>

      <div class="panel-body">
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu imperdiet metus, vitae facilisis libero. Ut volutpat nunc et dui ullamcorper convallis. Aenean porta diam eget nulla lobortis euismod. Aenean congue sit amet mauris at sollicitudin. Nullam egestas eleifend leo nec consequat. Nunc non lectus eu orci faucibus bibendum id ut mi. Vestibulum feugiat, leo a lobortis convallis, lacus risus vestibulum urna, fringilla sodales metus mauris vitae turpis. Pellentesque auctor vestibulum nisl ac consectetur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Nam pulvinar cursus porttitor. Cras eu erat euismod, lacinia lectus a, viverra mi. Sed semper auctor sagittis. Praesent at vestibulum nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum porttitor id quam ut ullamcorper. Sed pellentesque nisl et varius porttitor. Cras blandit varius magna sit amet efficitur. Donec leo enim, ultricies quis commodo id, ultrices vitae justo. Pellentesque nec dui turpis. Nam at lectus condimentum, iaculis orci non, ornare mauris. Suspendisse consectetur et magna ut consequat. Sed fermentum, metus at accumsan consequat, augue enim scelerisque turpis, et consequat risus erat pretium nunc. Cras eget rutrum sapien. Phasellus ac viverra turpis. Mauris nec ipsum ligula. Phasellus faucibus eleifend convallis. Sed aliquet ipsum sit amet lacinia pellentesque. Curabitur a magna molestie ipsum congue sollicitudin ut eu risus. Nulla lacus mauris, commodo at vehicula efficitur, lacinia sit amet felis. Integer vel accumsan eros, sed fermentum risus. Sed vehicula leo eu elit venenatis, ac sagittis orci accumsan. Aenean tempus, diam et viverra posuere, lorem mauris elementum dui, eu placerat lorem lacus nec nibh. Nullam nec mauris congue sem volutpat commodo a id massa. Praesent nec nunc sed tellus facilisis rutrum. Phasellus porttitor lobortis arcu id rutrum. Cras hendrerit sodales nunc, et vestibulum risus blandit id. Praesent vestibulum ut urna cursus suscipit. Nam sed hendrerit turpis. Nunc aliquam bibendum augue, et malesuada justo maximus quis. </p>
      </div>
    </div>
  </div>
</template>

<script>
import Overlay from "@/components/overlay/Overlay"
import Switch from "@/components/fields/Switch"

export default {
  components: {
    [Overlay.name]: Overlay,
    [Switch.name]: Switch
  },
  data() {
    return {
      hidden: true,
      dismissible: false
    }
  }
}
</script>

<style lang="scss" scoped>
.panel {
  position: relative;
}

.panel-body {
  height: 200px;
  overflow-y: scroll;
}
</style>