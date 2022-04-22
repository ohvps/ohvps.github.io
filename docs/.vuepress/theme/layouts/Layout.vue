<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="footer-wrapper">
        <footer class="page-edit footer">

          <div class="footer-info">
            <p style="padding-right: 15px">© Tüm hakları saklıdır.</p>
          </div>
        </footer>
      </div>
    </template>
  </ParentLayout>
</template>

<script>
  import ParentLayout from '@parent-theme/layouts/Layout.vue'

  export default {
    name: 'Layout',

    components: {
      ParentLayout
    }
  }
</script>

<style lang="stylus">
  .footer {
  
    height: 40px;
    background-color: #dfe2e5;
    display: contents;

    font-family: 'Equip', 'equip', sans-serif;
    word-spacing: 0;
    font-weight: 300;
  }

  .footer-navigation {
    display: flex;
    flex-direction: row;
    color: #6180c3;

    ul {
      padding-left: 0;
    }

    li {
      display: inline;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      border-right: 1px solid #ffffff;
    }

    li:first-child {
      padding-left: 0;
    }

    li:last-child {
      border-right: 0;
      padding-right: 0;
    }
  }

  .footer-info {
    text-align: end;
    display: flow-root;
    flex-direction: row;
    color: #010912;
    
  }

  $mobileSidebarWidth = $sidebarWidth * 0.82;

  @media not all and (max-width: $MQMobileNarrow) and (max-width: $MQMobile) {
    .footer {
      margin-left: $sidebarWidth;
    }
  }

  @media (max-width: $MQNarrow) {
    .footer {
      margin-left: $mobileSidebarWidth;
    }
  }

  @media (max-width: $MQMobileNarrow), (max-width: $MQMobile) {
    .footer {
      margin-left: 0;
    }
  }

  .footer-wrapper {
    background-color: #dfe2e5;
  }
</style>
