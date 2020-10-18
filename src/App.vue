<template>
  <div id="app">
    <FormulateForm @submit="showAlert">
      <FormulateInput
        type="text"
        name="name"
        label="What is your name?"
        value="Tim"
      />

      <FormulateInput
        type="email"
        name="email"
        label="Email?"
        validation="required|email"
        value="tim@gmail.com"
      />

      <FormulateInput
        type="image"
        name="headshot"
        label="Select an image to upload"
        help="Select a png, jpg or gif to upload."
        validation="mime:image/jpeg,image/png,image/gif"
      />

      <FormulateInput type="group" name="address" label="Address">
        <FormulateInput
          type="text"
          name="street"
          label="Street"
          value="Street ABC"
        />
        <FormulateInput type="text" name="city" label="City" value="City ABC" />
        <FormulateInput
          type="select"
          name="state"
          label="State"
          :options="{ VA: 'Virginia', CA: 'California', NY: 'New York' }"
          value="CA"
        />
      </FormulateInput>

      <FormulateInput
        type="autocomplete"
        name="customer"
        label="Search for a customer"
        :options="[
          { value: 1, label: 'Jon Doe' },
          { value: 2, label: 'Jane Roe' },
          { value: 3, label: 'Bob Foe' },
          { value: 4, label: 'Ben Cho' },
        ]"
      />

      <FormulateInput
        type="group"
        name="students"
        label="Students"
        :repeatable="true"
        add-label="+ Add Attendee"
      >
        <FormulateInput type="text" name="name" label="Name" value="John" />
        <FormulateInput type="text" name="age" label="Age" value="10" />
      </FormulateInput>

      <FormulateInput
        type="text"
        label="What ice cream flavor? Validation"
        help="Note: We're fresh out of strawberries and bananas."
        name="flavor"
        value="apple"
        validation="required|not:strawberry,banana"
      />

      <FormulateInput
        label="How many tacos do you want? (with bailing)"
        type="text"
        validation="bail|required|number|between:1,10,value"
        validation-name="Taco quantity"
        error-behavior="live"
      />

      <FormulateInput
        label="Create a new password (with modifier)"
        type="password"
        name="password"
        error-behavior="live"
        validation="^required|min:4,length|matches:/[0-9]/"
        :validation-messages="{
          matches: 'Passwords require at least one number.',
        }"
      />

      <FormulateInput type="submit" name="Submit this form!" />
    </FormulateForm>

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<script>
export default {
  methods: {
    showAlert(form) {
      console.log(form);
    },
  },
};
</script>

<style lang="scss">
@import "~@braid/vue-formulate/dist/snow.min.css";
@import "~bootstrap/dist/css/bootstrap.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
