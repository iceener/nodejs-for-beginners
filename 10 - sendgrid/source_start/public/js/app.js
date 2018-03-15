new Vue({
    el: '.dog-app',
    data: {
        formLightbox: false,
        showFeedback: true
    },
    methods: {
        closeFeedbackLightbox() {
            this.showFeedback = false;
        }
    },
    mounted() {
        const container = document.querySelector('.dog-app');
        this.formLightbox = container.getAttribute('data-lightbox') === 'true';
    }
});