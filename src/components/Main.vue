<template>
  <Banner />
  <Location />
  <Product />
  <Partners />
  <Clients />
</template>

<script>
import Banner from './Banner';
import Location from './Location';
import Product from './Product';
import Partners from './Partners';
import Clients from './Clients';

export default {
  name: 'MainLayout',
  components: { Banner, Location, Product, Partners, Clients },
};
</script>

<style></style>
