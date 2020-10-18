<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col>
          <h4 class="my-3">Test form</h4>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <FormulateForm @submit="showAlert" v-model="form">
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

            <FormulateInput type="group" name="addresses" label="Addresses">
              <nx-table :rows="form.addresses">
                <nx-table-column title="Street" data="street">
                  <template #default="{ rowIndex }">
                    <FormulateInput
                      type="text"
                      name="street"
                      v-model="form.addresses[rowIndex].street"
                    />
                  </template>
                </nx-table-column>
                <nx-table-column title="State" data="state">
                  <template #default="{ rowIndex }">
                    <FormulateInput
                      type="select"
                      name="state"
                      v-model="form.addresses[rowIndex].state"
                      :options="{
                        VA: 'Virginia',
                        CA: 'California',
                        NY: 'New York',
                      }"
                    />
                  </template>
                </nx-table-column>
              </nx-table>
              <b-button
                @click="
                  form.addresses.push({
                    street: '',
                    state: '',
                  })
                "
                >Add</b-button
              >
              <!-- <b-button @click="form.addresses.push({})">Add</b-button> -->
            </FormulateInput>

            <FormulateInput
              type="autocomplete"
              name="customer"
              label="Search for a customer (Type: Jon)"
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
              <FormulateInput
                type="text"
                name="name"
                label="Name"
                value="John"
              />
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
        </b-col>
        <b-col>
          <vue-json-pretty :data="form"></vue-json-pretty>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";

export default {
  components: {
    VueJsonPretty,
  },
  data() {
    return {
      form: {
        addresses: [],
      },
    };
  },
  methods: {
    showAlert(form) {
      // For consistency, the value of a group will always be an array even if the field is not repeatable. If you need a plain object, we recommend destructuring the array inside a form submit handler
      console.log(form);
    },
  },
};
</script>

<style lang="scss">
@import "~@braid/vue-formulate/dist/snow.min.css";
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~bootstrap-vue/dist/bootstrap-vue.css";
@import "~nx-table/dist/nx-table.css";
@import "~datatables.net-dt/css/jquery.dataTables.min.css";
@import "~datatables.net-select-dt/css/select.dataTables.min.css";
@import "~datatables.net-responsive-dt/css/responsive.dataTables.min.css";
@import "~datatables.net-rowreorder-dt/css/rowReorder.dataTables.min.css";
@import "~nx-table/dist/nx-table.css";

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
