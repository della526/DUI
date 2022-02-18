<template>
    <div class="d-card">
        <div class="d-card-img" :style="width ? { width: width + 'px' } : {}">
            <img
                :src="imgSrc"
                alt="img"
                :style="imgSrc ? { height: imgHeight + 'px' } : {}"
            />
        </div>
        <div v-if="summary" class="d-card-summary">{{summary}}</div>
        <div v-else class="d-card-summary">
            <slot></slot>
        </div>
        <slot name="footer" class="d-card-footer"></slot>
    </div>
</template>
<script>
export default {
    name: 'd-card',
    props: {
        width: {
            type: Number,
            default: 200,
        },
        imgHeight: {
            type: Number,
            default: 0,
        },
        imgSrc: {
            type: String,
            default: '',
        },
        summary: {
            type: String,
            default: '',
        },
    },
};
</script>
<style lang="scss">
@import './card.scss';
</style>