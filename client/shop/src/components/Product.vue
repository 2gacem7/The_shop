<template>
    <div class="q-pa-md row items-start q-gutter-md justify-center">
        <div v-for="product in products" :key="product">
            <q-card class="my-card col-md-6 col-xs-12">
                <img :src= product.img class="responsive"
                style="max-width: 400px; height: 200px;"
                contain
                >
                <q-card-section>
                    <div class="text-h6">{{ product.title }}</div>
                    <div class="text-subtitle2">{{ product.price }} €</div>
                </q-card-section>
                <q-card-section class="q-pt-none">
                    {{ product.description }}
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<script>
import ProductService from "../services/product.service";

export default {
  name: "tutorials-list",
  data() {
    return {
      products: [],
    };
  },
  methods: {
    allProduct() {
      ProductService.get()
        .then(response => {
          this.products = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.allProduct();
    },
  },
  mounted() {
    this.allProduct();
  }
};
</script>

<style lang="sass" scoped>
.my-card 
  width: 100%
  height: 100%
  max-width: 250px
  max-height: 550px
</style>