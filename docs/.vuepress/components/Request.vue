<template>
    <div>
       
        <div class="col" style="width: 100%;">
           <TitleBox :title="title"/>

           <div >
            <PostBox :path="path" v-if="httpMethod == 'POST'"/>
            <DeleteBox :path="path"  v-if="httpMethod == 'DELETE' "/>
            <GetBox :path="path" v-if="httpMethod == 'GET' "/>
            <PutBox :path="path"  v-if="httpMethod == 'PUT' "/>
           </div>
           <div>
          
           </div>
          
           <ProcessTitle title="İstek Başlığı"/>
           
           <KeyValueGrid :headers="headers"/>
            <ProcessTitle title="İstek Gövdesi"/>


           
            <BodyBox v-if="httpMethod == 'POST'" :body="requestBody" height="300"/>
            <p   v-if="httpMethod == 'GET'" style="height: 300px;margin-top: 40px;padding: 5px;"></p>
            <p   v-if="httpMethod == 'DELETE'" style="height: 300px;margin-top: 40px;padding: 5px;" ></p>
            <p   v-if="httpMethod == 'PUT'" :body="requestBody" height="300"/>

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
    props: ['title','headers','requestBody','actionButtonText','path', 'httpMethod'],
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
  
