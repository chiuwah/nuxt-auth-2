<template>
  <div>

    <h1>Hello world!</h1>
    <input type="text" v-model="username" placeholder="Username"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button @click="signUp">Sign Up</button>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br><br>
    <span>Checked names: {{ checkedNames }}</span>
  </div>
</template>

<script>
  import { Auth } from 'aws-amplify'
  export default {
    data() {
      return {
        checkedNames: [],
        username: '',
        password: '',
      }
    },
    methods: {
      signup: function() {
        console.log(this.username, this.password);
      },
      signUp: async function () {
        try {
          const user = await Auth.signUp({
            username: this.username,
            password: this.password,
          });
          console.log(user);
        } catch (error) {
          console.log('error signing up:', error);
        }
      }
    }
  }
</script>
