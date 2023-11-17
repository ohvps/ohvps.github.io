<template>
    <div>
        <div class="container-fluid">
                                <div class="row main-content text-center" style="border-radius: 30px;">
                                    <div class="col-md-4 text-center company__info">
                                        <span class="company__logo">
                                            <h2><img src="../public/assets/Troy_logo.png" /></h2>
                                        </span>

                                    </div>
                                    <div class="col-md-8 col-xs-12 col-sm-12 login_form ">
                                        <div class="container-fluid">
                                            <div class="row">
                                                <h2>Giriş Yap</h2>
                                            </div>
                                            <div class="row">
                                                <form control="" class="form-group">
                                                    <div class="row">
                                                        <input type="text" name="Kullanıcı Adı" id="username"
                                                            class="form__input" placeholder="BKM">
                                                    </div>
                                                    <div class="row">
                                                        <!-- <span class="fa fa-lock"></span> -->
                                                        <input type="password" name="Şifre" id="password"
                                                            class="form__input" placeholder="123456">
                                                    </div>

                                                    <div class="row">
                                                        <input @click="nextStep()" value="Giriş Yap" class="btn">
                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                    </div>
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
  .main-content {
    margin: auto;
    width: 50%;
    max-width: 800px;


    margin: 5em auto;
    display: flex;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-top: 3px solid var(--renk3);
    border-bottom: 3px solid var(--renk3);
    border-left: none;
    border-right: none;


}

.company__info {
    background-color: var(--renk1);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--renk3);
}



.row>h2 {
    color: var(--renk3);
}

.login_form {
    background-color: #fff;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;

}

form {
    padding: 0 2em;
}

.form__input {
    width: 100%;
    border: 0px solid transparent;
    border-radius: 0;
    border-bottom: 1px solid var(--renk3);
    padding: 1em .5em .5em;
    padding-left: 2em;
    outline: none;
    margin: 1.5em auto;
    transition: all .5s ease;
}

.form__input:focus {
    border-bottom-color: var(--renk3);
    box-shadow: 0 0 5px rgba(0, 80, 80, .4);
    border-radius: 4px;
}

.btn {
    transition: all .5s ease;
    width: 70%;
    border-radius: 30px;
    color: var(--renk3);
    font-weight: 600;
    background-color: #fff;
    border: 1px solid var(--renk3);
    margin-top: 1.5em;
    margin-bottom: 1em;
}

.btn:hover,
.btn:focus {
    background-color: var(--renk3);
    color: #fff;
}

</style>
