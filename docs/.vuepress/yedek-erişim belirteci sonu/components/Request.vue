<template>
    <div>
       
        <div class="col" style="width: 100%;">
           <TitleBox :title="title"/>

           <div >
            <PostBox :path="path" v-if="isGet == 'false'"/>
            <GetBox :path="path" v-else/>
           </div>
           <div>
          
           </div>
          
           <ProcessTitle title="İstek Başlığı"/>
           
           <KeyValueGrid :headers="headers"/>
            <ProcessTitle title="İstek Gövdesi"/>

            <BodyBox v-if="isGet == 'false'" :body="requestBody" height="300"/>
            <p   v-if="isGet == 'true'" style="height: 300px;margin-top: 40px;padding: 5px;"></p>
           
           

            <div style="margin-top: 30px;text-align: center;">
                <ProcessButton :content="actionButtonText" @process-event="request" />
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
        callParentMethod() {
            this.$emit('custom-event');
        },

        request(){
            this.$emit('request-event');
        }
    },
    components: {
       
    },


})
</script>
  
