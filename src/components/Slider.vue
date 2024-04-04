<script>
export default {
    name: 'Slider',
}
</script>
<template>
    <div class="container">
        <section id="slider">
            <input type="radio" name="slider" id="s1" checked>
            <input type="radio" name="slider" id="s2">
            <input type="radio" name="slider" id="s3">
            <input type="radio" name="slider" id="s4">
            <input type="radio" name="slider" id="s5">

            <label for="s1" id="slide1">1</label>
            <label for="s2" id="slide2">2</label>
            <label for="s3" id="slide3">3</label>
            <label for="s4" id="slide4">4</label>
            <label for="s5" id="slide5">5</label>

        </section>
    </div>
</template>
<style scoped>
.container {
    padding: 1rem 0;
    background-color: black;

}

#slider {
    width: 50%;
    height: 30vw;
    /* border: 1px solid black; */
    margin: 80px auto;

    position: relative;
    perspective: 1400px;
    transform-style: preserve-3d;

}

input[type=radio] {
    position: relative;
    top: 110%;
    left: 50%;
    width: 18px;
    height: 18px;
    margin: 0 15px 0 0;
    transform: translateX(-83px);
    opacity: 0.4;
    cursor: pointer;


}

input[type=radio]:nth-child(5) {
    margin-right: 0;
}

input[type='radio']:after {
    width: 18px;
    height: 18px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: #600101;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid rgb(171, 171, 171);
}

input[type=radio]:checked {
    opacity: 1;
}

input[type='radio']:checked:after {
    width: 18px;
    height: 18px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: #860000;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid rgb(216, 216, 216);
}

#slider>label {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    color: white;
    font-size: 70px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 13px 26px rgba(0, 0, 0, 0.3), 0 12px 6px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
}

#slide1 {
    background: tomato;

}

#slide2 {
    background: yellowgreen;

}

#slide3 {
    background: dodgerblue;

}

#slide4 {
    background: slateblue;

}

#slide5 {
    background: violet;

}


/* slider functionality */

/* slide 1 */

#s1:checked~#slide1 {
    transform: translate3d(0%, 0, 0px);
}

#s1:checked~#slide2 {
    transform: translate3d(15%, 0, -100px);
}

#s1:checked~#slide3 {
    transform: translate3d(30%, 0, -250px);
}

#s1:checked~#slide4 {
    transform: translate3d(-30%, 0, -250px);
}

#s1:checked~#slide5 {
    transform: translate3d(-15%, 0, -100px);
}

/* slide 2 */

#s2:checked~#slide2 {
    transform: translate3d(0%, 0, 0px);
}

#s2:checked~#slide3 {
    transform: translate3d(15%, 0, -100px);
}

#s2:checked~#slide4 {
    transform: translate3d(30%, 0, -250px);
}

#s2:checked~#slide5 {
    transform: translate3d(-30%, 0, -250px);
}

#s2:checked~#slide1 {
    transform: translate3d(-15%, 0, -100px);
}

/* slide 3 */

#s3:checked~#slide3 {
    transform: translate3d(0%, 0, 0px);
}

#s3:checked~#slide4 {
    transform: translate3d(15%, 0, -100px);
}

#s3:checked~#slide5 {
    transform: translate3d(30%, 0, -250px);
}

#s3:checked~#slide1 {
    transform: translate3d(-30%, 0, -250px);
}

#s3:checked~#slide2 {
    transform: translate3d(-15%, 0, -100px);
}

/* slide 4 */

#s4:checked~#slide4 {
    transform: translate3d(0%, 0, 0px);
}

#s4:checked~#slide5 {
    transform: translate3d(15%, 0, -100px);
}

#s4:checked~#slide1 {
    transform: translate3d(30%, 0, -250px);
}

#s4:checked~#slide2 {
    transform: translate3d(-30%, 0, -250px);
}

#s4:checked~#slide3 {
    transform: translate3d(-15%, 0, -100px);
}

/* slide 5 */

#s5:checked~#slide5 {
    transform: translate3d(0%, 0, 0px);
}

#s5:checked~#slide1 {
    transform: translate3d(15%, 0, -100px);
}

#s5:checked~#slide2 {
    transform: translate3d(30%, 0, -250px);
}

#s5:checked~#slide3 {
    transform: translate3d(-30%, 0, -250px);
}

#s5:checked~#slide4 {
    transform: translate3d(-15%, 0, -100px);
}
</style>