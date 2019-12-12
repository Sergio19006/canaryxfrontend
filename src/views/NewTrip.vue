<template>
  <div class="body">
    <div class="margin">
      <div class="container content">
        <div class="columns">
          <div class="column is-8">
            <b-field label="Title">
              <b-input placeholder="e.g. Teide Trip" size="is-large"></b-input>
            </b-field>
            <b-field label="Type">
              <b-autocomplete
                size="is-large"
                v-model="type"
                :data="filteredTypes"
                placeholder="e.g. Walk"
                :keep-first="true"
                :open-on-focus="true"
                @select="option => selected = option"
              >
                <template slot="empty">No results found</template>
              </b-autocomplete>
            </b-field>
            <div class="columns">
              <div class="column is-6">
                <b-field label="Numbers of persons">
                  <b-numberinput v-model="numberOfPersons" min="0"></b-numberinput>
                </b-field>
                <b-field label="Select time">
                  <b-clockpicker
                    placeholder="Click to select..."
                    size="is-medium"
                    icon="clock"
                    :hour-format="format"
                  ></b-clockpicker>
                </b-field>
                <b-field label="Island">
                  <b-autocomplete
                    size="is-large"
                    v-model="island"
                    :data="filteredIslands"
                    placeholder="e.g. Tenerife"
                    :keep-first="true"
                    :open-on-focus="true"
                    @select="option => selected = option"
                  >
                    <template slot="empty">No results found</template>
                  </b-autocomplete>
                </b-field>
              </div>
              <div class="column is-4">
                <b-field label="Guide">
                  <b-input size="is-medium" v-model="guide"></b-input>
                </b-field>
                <b-field label="Select a date">
                  <b-datepicker
                    v-model="date"
                    size="is-medium"
                    placeholder="Click to select..."
                    icon="calendar-today"
                  ></b-datepicker>
                </b-field>
                <b-field label="Price per person">
                  <b-numberinput v-model="price" min="0"></b-numberinput>
                </b-field>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="inline">
              <div class="field">
                <b-switch v-model="Transport">Transport</b-switch>
              </div>
              <div class="field">
                <b-switch v-model="Lunch">Lunch</b-switch>
              </div>
            </div>

            <b-field>
              <b-upload v-model="dropFiles" multiple drag-drop>
                <section class="section">
                  <div class="content has-text-centered">
                    <p>
                      <b-icon icon="upload" size="is-large"></b-icon>
                    </p>
                    <p>Drop your files here or click to upload</p>
                  </div>
                </section>
              </b-upload>
            </b-field>
            <div class="tags">
              <span v-for="(file, index) in dropFiles" :key="index" class="tag is-primary">
                {{file.name}}
                <button
                  class="delete is-small"
                  type="button"
                  @click="deleteDropFile(index)"
                ></button>
              </span>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-4">
            <b-field label="Place">
              <b-input size="is-medium" v-model="place"></b-input>
            </b-field>
          </div>
        </div>
        <div class="conditions column">
          <b-field label="Conditions">
            <b-input v-model="condition" size="is-medium"></b-input>
          </b-field>
          <button class="button" @click="addCondition">Add Condition</button>
          <ul>
            <li v-for="cond in conditions" v-bind:key="cond">{{ cond }}</li>
          </ul>
        </div>

        <div class="content maps">
          <GoogleMaps />
        </div>
        <button @click="sendFiles()" >Enviar rollo</button>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMaps from "../components/GoogleMapsBusinnes";
import axios from 'axios';
export default {
  data() {
    return {
      types: ["Walk", "Sea", "Experience"],
      numberOfPersons: 15,
      guide: "",
      type: "",
      selected: null,
      isAmPm: true,
      price: 20,
      island: "",
      islands: [
        "Tenerife",
        "Gran Canaria",
        "La Gomera",
        "El Hierro",
        "La Palma",
        "Lanzarote",
        "Fuerteventura"
      ],
      dropFiles: [],
      Transport: false,
      Lunch: false,
      condition: "",
      conditions: [],
      place: "",
      date:""
    };
  },
  computed: {
    filteredTypes() {
      return this.types.filter(option => {
        return (
          option
            .toString()
            .toLowerCase()
            .indexOf(this.type.toLowerCase()) >= 0
        );
      });
    },
    filteredIslands() {
      return this.islands.filter(option => {
        return (
          option
            .toString()
            .toLowerCase()
            .indexOf(this.type.toLowerCase()) >= 0
        );
      });
    },
    // eslint-disable-next-line
    deleteDropFile(index) {
      // eslint-disable-next-line
      this.dropFiles.splice(index, 1);
    },
    format() {
      return this.isAmPm ? "12" : "24";
    }
  },
  methods: {
    addCondition() {
      this.conditions.push(this.condition);
      this.condition = "";
    },
    async sendFiles(){
      let data = new FormData();
      for(let img of this.dropFiles)
        data.append('img', img, img.name);
      const response = await axios.post('http://localhost:3000/api/v1/trips/upload',data);
    }
  },
  components: {
    GoogleMaps
  }
};
</script>

<style lang="scss" scoped>
.margin {
  padding: 50px 0px 50px 0px;
}
.body {
  width: 100vw;
  background-image: url("../assets/newTrip.png");
  background-repeat: repeat;
  background-size: 100%, auto;
  min-height: 600px;
  margin-top: -100px;
}

.column {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.content.container {
  background-color: white;
  margin-top: 100px;
}
.maps {
  width: 95%;
  height: 95%;
  padding-bottom: 25px;
  margin: auto;
}

.conditions {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>