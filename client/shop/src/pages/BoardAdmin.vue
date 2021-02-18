<template>
    <div class="q-pa-md">
        <div class="row">
          <div v-if="!submitted">
            <div class="col-md-4 col-xs-12 text-center">
                <q-input v-model="product.title" type="text" hint="Name" />
                <q-input v-model="product.price" type="number" hint="price" />
                <q-input v-model="product.description" filled clearable type="textarea" shadow-text />
                <q-input v-model="product.img" type="text" hint="Image Url" />
                <q-btn @click.prevent="saveProduct()" class="q-mt-4" color="black" label="save  " />
            </div>
          </div>
          <div class="v-else">
            <q-btn @click.prevent="addProduct()" class="q-mt-4" color="black" label="Add" />
          </div>
        </div>
    </div>
</template>


<style>

</style>