<template>
<div>
    <div v-if="showAdminBoard" class="q-pa-md">
        <div class="row q-mt-lg">
            <div class="col-md-3 col-xs-12 text-center">
                <q-input v-model="title" type="text" hint="Name" />
                <q-input v-model="price" type="number" hint="price" />
                <q-input v-model="description" filled clearable type="textarea" shadow-text />
                <q-input v-model="img" type="text" hint="Image Url" />
                <q-btn @click.prevent="addProduct()" class="q-mt-4" color="black" label="save  " />
            </div>
            <q-card class="my-card col-md-8 q-ml-lg">
              <q-card-section>
                <div class="text-h6">Products</div>
              </q-card-section>
              <q-markup-table>
                <thead>
                  <tr>
                    <th class="text-center">Name</th>
                    <th class="text-center">Description</th>
                    <th class="text-center">Price</th>
                    <th class="text-center"></th>
                    <th class="text-center">Actions</th>

                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in products" :key="product">
                    <td class="text-center">{{product.title}}</td>
                    <td class="text-center">{{product.description}}</td>
                    <td class="text-center">{{product.price}}</td>
                    <td class="text-center"><img :src= product.img class="responsive"
                      style="max-width: 400px; height: 200px;"
                      contain
                    >
                    </td>
                    <td class="text-center">Bouton</td>

                
                  </tr>
                </tbody>
              </q-markup-table>
            </q-card>

        </div>
      <div class="q-pa-md">
        <div class="row justify-center">
        </div>
      </div>
    </div>
    <div v-else>
      <h1>TU VAS OUUUUUUU, RESTE LAAAAAAAAAA</h1>
    </div>
    </div>
</template>

<script>
import axios from "axios";
import ProductService from "../services/product.service";

export default {
  
  name: 'App',
  data(){
    return {
      products: [],
      title:"",
      description:"",
      price:"",
      img:"",
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }

      return false;
    },
  },
  methods: {
    async addProduct() {
            const response = await axios.post('http://localhost:8080/api/product', {
              title : this.title,
              description : this.description,
              price : this.price,
              img : this.img
            });
            this.products.push(response.data);
            this.title ="";
            this.description="";
            this.price="";
            this.img="";
            location.reload();
    },
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
    
  
}
</script>


<style>

</style>