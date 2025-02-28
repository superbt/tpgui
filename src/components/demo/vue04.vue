
<div id="btapp"> {{message}}</div>


<script type="module">

import { createApp} from "vue";

const  app = createApp({
   data(){
     return {
      message:"hello world"
     }
   }
})
app.mount("#btapp")

</script>


