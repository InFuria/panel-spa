<template>
    <div>
        <!-- Navbar -->
        <navbar :route="mainroute"></navbar>
        <!-- /.navbar -->
`
        <!-- Main Sidebar Container -->
        <sidebar :route="mainroute"></sidebar>
        <!-- /.sidebar -->

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <transition name="slide-fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
        <!-- /.content-wrapper -->

        <!-- Footer -->
        <main-footer></main-footer>
        <!-- /.footer -->

        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
        </aside>
        <!-- /.control-sidebar -->
    </div>
</template>

<script>
    import Navbar from './layouts/Navbar'
    import Sidebar from "./layouts/Sidebar"
    import MainFooter from "./layouts/Footer"
    export default {
        name: "App",
        props: ['mainroute'],
        components: {
            Navbar,
            Sidebar,
            MainFooter
        }
    }
</script>

<style scoped>

</style>
