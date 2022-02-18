<template>
    <div id="app">
        <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
        <Demo></Demo>
        <!-- <d-card
            imgSrc="./assets/logo.png"
            :imgHeight="100"
            summary="hellow"
        ></d-card> -->
        <d-card imgSrc="./assets/logo.png" :imgHeight="100" summary="hellow">
            <template v-slot:footer>
                <div>
                    <p>aaaaaa</p>
                    <p>bbbbbb</p>
                </div>
            </template>
        </d-card>
    </div>
</template>

<script>

export default {
    name: 'App',
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
