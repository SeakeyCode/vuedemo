<template>
    <div class="picview">
        <div @click="close($event)" ref="pop" class="picview-pop">
            <img ref='img' :src="picsrc" alt="" :style="`transform: scale(${scale}) rotate(${roted}deg);width:${picW}px;height:${picH}px;top:${picTop}px;left:${picLeft}px`">
        </div>
    </div>
</template>
<script>
export default {
    name: "Picview",
    props: {
        imgdata: String,
        width: String,
        height: String
    },
    data() {
        return {
            picsrc: "",
            picW: "",
            picH: "",
            scale: 1,
            roted: 0,
            picTop: 0,
            picLeft: 0
        };
    },
    mounted () {
        this.picsee(this.imgdata)
    },
    methods: {
        picsee(src) {
            this.picsrc = src;
            this.scale = 1;
            this.roted = 0;
            this.$refs.pop.style.display = "block";
            let img = new Image();
            img.src = src;
            let vm = this;
            img.onload = function() {
                vm.zoom();
                vm.drag();
                vm.countImg();
            };
            window.onresize = function() {
                vm.countImg();
            };
        },
        zoom() {
            let vm = this;
            document.body.onmousewheel = function(event) {
                event = event || window.event;
                if (event.deltaY > 0) {
                    vm.scale = vm.scale > 0.2 ? vm.scale - 0.1 : vm.scale;
                } else {
                    vm.scale += 0.1;
                }
            };
        },
        drag() {
            let oDiv = this.$refs.img;
            let vm = this;
            oDiv.onpointerdown = function(en) {
                var ev = ev || event;
                var disX = en.clientX - oDiv.offsetLeft;
                var disY = en.clientY - oDiv.offsetTop;
                if (oDiv.setCapture) {
                    oDiv.setCapture();
                }
                document.onpointermove = function(en) {
                    var ev = ev || event;
                    if (
                        en.clientY > 0 &&
                        en.clientY < vm.$refs.pop.clientHeight &&
                        en.clientX > 0 &&
                        en.clientX < vm.$refs.pop.clientWidth
                    ) {
                        vm.picTop = en.clientY - disY;
                        vm.picLeft = en.clientX - disX;
                    }
                };
                document.onpointerup = function() {
                    document.onpointermove = null;
                    if (oDiv.releaseCapture) {
                        oDiv.releaseCapture();
                    }
                };
                return false; //阻止默认行为（如果页面中有文字，则会默认拖动文字），ie8及一下不行
            };
        },
        rote() {
            this.roted += 90;
        },
        close(e) {
            if (
                e.target != this.$refs.img &&
                e.target.contains(this.$refs.rote)
            ) {
                this.$refs.pop.style.display = "none";
            } else {
                return false;
            }
        },
        countImg() {
            // console.dir(this.$refs.img)
            // let picW = this.$refs.img.naturalWidth;
            // let picH = this.$refs.img.naturalHeight;
            // let Width = this.$refs.pop.offsetWidth;
            // let Height = this.$refs.pop.offsetHeight;
            // if (Width / Height <= picW / picH) {
            //     this.picW = Width;
            //     this.picH = `${Number(picH) * Width / Number(picW)}`;
            //     this.picTop = (Height - this.picH) / 2;
            //     this.picLeft = 0;
            // } else {
            //     this.picH = Height;
            //     this.picW = `${Number(picW) * Height / Number(picH)}`;
            //     this.picTop = 0;
            //     this.picLeft = (Width - this.picW) / 2;
            // }
        }
    }
};
</script>
<style  scoped>
.picview {
    width: 100%;
    height: 100%;
}
.picview-pop {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 600px;
    height: 600px;
}
.picview-pop img {
    position: absolute;
}
</style>