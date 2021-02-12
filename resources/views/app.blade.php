<!DOCTYPE html>
<html lang="es">

@include('sections.head')
<body class="hold-transition sidebar-mini">
    <div class="wrapper" id="app">
        <App mainroute="{{ route('basepath') }}"></App>
    </div>

    @include('sections.scripts')
</body>
</html>
