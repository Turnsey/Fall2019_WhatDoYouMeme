<template>
    <div>
    <h1 class="is-size-1">
     Login
    </h1> 

    <div class="columns">
        <div class="column is-one-third is-offset-one-third">
            
            <ul class="panel">
                <p class="panel-heading">
                    Login
                </p>
                <div class="panel-block">
                    <div class="field has-addons">

                    <div class="field" :class="{ 'is-danger' }">
                        <div class="control has-icons-left has-icons-right">
                        <input vmodel="name" class="input" type="text" placeholder="Your Name">
                        <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                        <i class="fas fa-exclamation-triangle"></i>
                        </span>
                    </div>
                    </div>

                        <div class="control is-expanded">
                            <input v-model="name" class="input" type="text" placeholder="Enter Username">
                     </div>
                        <div class="control">
                            <a class="button is-info" @click.prevent="join">
                            Login
                            </a>
                        </div>
                    </div>
                    <p class="help is-danger">This email is invalid</p>
                </div>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import { Game_Server } from "../models/Game"
export default {
    data: ()=>({
        name: "",
        error: ""
    }),
    methods: {
        async join(){
            Game_Server.Join(this.name)
            .catch(err=>{ 
            console.log(err);
            this.error = err.message;
            })
            .then(x=> this.$router.push( { name: 'game' } ))
        }
    }

}
</script>

<style lang="scss">

    .fas.fa-exclamation-triangle {
        display: none;
    }

    .is-danger{
        .fa-exclamation-triangle {
        display: inline;
        color: red;
        }
        .input{
            border-color: red;
        }
    }

</style>