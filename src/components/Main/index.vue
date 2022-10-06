<template>
  <Banner />
  <Location />
  <Product />
  <Partners />
  <Clients />
</template>

<script>
import Banner from '../Sections/Banner';
import Location from '../Sections/Location';
import Product from '../Sections/Product';
import Partners from '../Sections/Partners';
import Clients from '../Sections/Clients';

export default {
  name: 'MainLayout',
  components: { Banner, Location, Product, Partners, Clients },
};
</script>

<style></style>
