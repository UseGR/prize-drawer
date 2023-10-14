<template>
  <v-container>
    <v-row class='ma-3 justify-center text-h5 text-center'>Сформировать лот для розыгрыша</v-row>
    <v-sheet width='auto' class='mx-3'>
      <v-form fast-fail @submit.prevent='postNewLot'>
        <v-text-field
            v-model='description'
            label='Описание для администратора'
            :rules='descriptionRules'
        ></v-text-field>

        <v-text-field
            v-model='winnerDescription'
            label='Описание для победителя'
            :rules='winnerDescriptionRules'
        ></v-text-field>
        {{ errorMessage }}
        <v-btn type='submit' block class='mt-2'>Сформировать</v-btn>
      </v-form>
    </v-sheet>
  </v-container>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      errorMessage: '',
      api_url: process.env.VUE_APP_API_URL + '/api/lots',
      description: '',
      descriptionRules: [
        value => {
          if (value?.length > 0) return true

          return 'Введите описание для администратора'
        },
      ],
      winnerDescription: '',
      winnerDescriptionRules: [
        value => {
          if (value?.length > 0) return true

          return 'Введите описание для победителя'
        },
      ],
    }
  },
  methods: {
    postNewLot() {
      if (this.description && this.winnerDescription) {
        // axios.post(this.api_url, {
        //   description: this.description,
        //   winnerDescription: this.winnerDescription
        // }, {
        //   headers: {
        //     'Content-Type': 'application/json'
        //   }
        // })
        //     .then(response => {
        //       console.log(response)
        //       window.Telegram.WebApp.close()
        //     })
        //     .catch(error => this.errorMessage = error.toJSON())
        fetch(this.api_url, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            description: this.description,
            winnerDescription: this.winnerDescription
          })
        }).then(response => console.log(response))
            .catch(error => console.log(error.toJSON()))
      }
    },
  }
}
</script>

<style>
</style>
