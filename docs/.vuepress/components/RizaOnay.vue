<template>
    <div>
        <div class="card">
                                <div class="title">Rıza Onayı</div>
                                <div class="info">
                                    <div class="row">
                                        <div class="col-7">
                                            <span id="heading">Tarih</span><br>
                                            <span id="details">10/11/2023 12:40</span>
                                        </div>
                                        <div class="col-5 pull-right">
                                            <span id="heading">Rıza No</span><br>
                                            <span id="details">12b5e76f881243a484c47be4e89257e3</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="pricing">
                                    <div class="row">
                                        <div class="col-9">
                                            <span id="name">TR320010009999901234567890 Serkan Eren</span>
                                        </div>
                                        <div class="col-3">
                                            <span id="price">₺300</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-9">
                                            <span id="name">Masraf Tutar</span>
                                        </div>
                                        <div class="col-3">
                                            <span id="price">₺2</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="total">
                                    <div class="row">
                                        <div class="col-9"></div>
                                        <div class="col-3">₺302</div>
                                    </div>
                                </div>
                                <div class="tracking">
                                    <div class="title">İşlem Durumu</div>
                                </div>
                                <div class="progress-track">
                                    <ul id="progressbar">
                                        <li class="step0 active " id="step1">Rıza Alındı</li>
                                        <li class="step0 active text-center" id="step2">GKD Tamamlandı</li>
                                        <li class="step0 active text-right" id="step3">Rıza Onayı</li>
                                        <li class="step0 text-right" id="step4">Ödeme Emri</li>
                                    </ul>
                                </div>

                                <div style="margin-top: 40px;text-align: center;">
                                    <ProcessButton content="Onayla" @process-event="nextStep" />
                                  
                                </div>
                                <div class="footer">

                                </div>
                            </div>
    </div>
</template>
  
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Request',
    props: ['title','headers','requestBody','actionButtonText','path','isGet'],
    methods: {
   
        nextStep(){
            this.$emit('process-event');
        }
    },
    components: {
       
    },


})
</script>
  <style scoped>
 

.card {
    margin: auto;
    width: 80%;
    max-width: 800px;
    padding: 4vh 0;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-top: 3px solid var(--renk3);
    border-bottom: 3px solid var(--renk3);
    border-left: none;
    border-right: none;
}

.title {
    color: var(--renk3);
    font-weight: 600;
    margin-bottom: 2vh;
    padding: 0 8%;
    font-size: initial;
}

#details {
    font-weight: 400;
}

.info {
    padding: 5% 8%;
}

.info .col-5 {
    padding: 0;
}

.pricing {
    background-color: var(--renk1);
    padding: 2vh 8%;
    font-weight: 400;
    line-height: 2.5;
}

.pricing .col-3 {
    padding: 0;
}

.total {
    padding: 2vh 8%;
    color: var(--renk3);
    font-weight: bold;
}

.total .col-3 {
    padding: 0;
}

.footer {
    padding: 0 8%;
    font-size: x-small;
    color: black;
}

.footer img {
    height: 5vh;
    opacity: 0.2;
}

.footer a {
    color: rgb(252, 103, 49);
}

.footer .col-10,
.col-2 {
    display: flex;
    padding: 3vh 0 0;
    align-items: center;
}

.footer .row {
    margin: 0;
}

#progressbar {
    margin-bottom: 3vh;
    overflow: hidden;
    color: rgb(252, 103, 49);
    padding-left: 0px;
    margin-top: 3vh
}

#progressbar li {
    list-style-type: none;
    font-size: x-small;
    width: 25%;
    float: left;
    position: relative;
    font-weight: 400;
    color: rgb(160, 159, 159);
}

#progressbar #step1:before {
    content: "";
    color: rgb(252, 103, 49);
    width: 5px;
    height: 5px;
    margin-left: 0px !important;
    /* padding-left: 11px !important */
}

#progressbar #step2:before {
    content: "";
    color: #fff;
    width: 5px;
    height: 5px;
    margin-left: 32%;
}

#progressbar #step3:before {
    content: "";
    color: #fff;
    width: 5px;
    height: 5px;
    margin-right: 32%;
    /* padding-right: 11px !important */
}

#progressbar #step4:before {
    content: "";
    color: #fff;
    width: 5px;
    height: 5px;
    margin-right: 0px !important;
    /* padding-right: 11px !important */
}

#progressbar li:before {
    line-height: 29px;
    display: block;
    font-size: 12px;
    background: #ddd;
    border-radius: 50%;
    margin: auto;
    z-index: -1;
    margin-bottom: 1vh;
}

#progressbar li:after {
    content: '';
    height: 2px;
    background: #ddd;
    position: absolute;
    left: 0%;
    right: 0%;
    margin-bottom: 2vh;
    top: 1px;
    z-index: 1;
}

.progress-track {
    padding: 0 8%;
}

#progressbar li:nth-child(2):after {
    margin-right: auto;
}

#progressbar li:nth-child(1):after {
    margin: auto;
}

#progressbar li:nth-child(3):after {
    float: left;
    width: 68%;
}

#progressbar li:nth-child(4):after {
    margin-left: auto;
    width: 132%;
}

#progressbar li.active {
    color: black;
}

#progressbar li.active:before,
#progressbar li.active:after {
    background: rgb(252, 103, 49);
}

</style>
