<template>
  <div v-if="show" class="modal-shadow" @click.self="closeModal">
    <div class="modal">
      <div class="modal-close" @click="closeModal">&#10006;</div>
      <slot name="title">
        <h3 class="modal-title">Подробная информация</h3>
      </slot>
      <slot name="body">
        <div class="modal-content">
<!--          <span>{{item.id}}</span>-->
          <ShowHumanFields v-if="$route.path==='/'" :item="item"/>
          <ShowPerformerFields v-if="$route.path==='/performer'" :item="item"/>
          <ShowCaseFields v-if="$route.path==='/case'" :item="item"/>
          <ShowAddressFields v-if="$route.path==='/address'" :item="item"/>
          <ShowClientFields v-if="$route.path==='/client'" :item="item"/>
          <ShowEvidenceFields v-if="$route.path==='/evidence'" :item="item"/>
          <ShowSuspectFields v-if="$route.path==='/suspect'" :item="item"/>
          <ShowSourceFields v-if="$route.path==='/source'" :item="item"/>
          <ShowCriminalFields v-if="$route.path==='/criminal'" :item="item"/>
          <ShowPunishmentFields v-if="$route.path==='/punishment'" :item="item"/>
          <ShowCrimeTypeFields v-if="$route.path==='/crimetype'" :item="item"/>
        </div>
      </slot>
      <slot name="footer">
        <div class="modal-footer">
          <button class="modal-footer__button" @click="closeModal">
            Ок
          </button>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import ShowHumanFields from "./ShowHumanFields";
import ShowPerformerFields from "./ShowPerformerFields";
import ShowCaseFields from "./ShowCaseFields";
import ShowClientFields from "./ShowClientFields";
import ShowAddressFields from "./ShowAddressFields";
import ShowEvidenceFields from "./ShowEvidenceFields";
import ShowSuspectFields from "./ShowSuspectFields";
import ShowSourceFields from "./ShowSourceFields";
import ShowCriminalFields from "./ShowCriminalFields";
import ShowPunishmentFields from "./ShowPunishmentFields";
import ShowCrimeTypeFields from "./ShowCrimeTypeFields";

export default {
  name: "ModalWindow",
  components: {
    ShowCrimeTypeFields,
    ShowPunishmentFields,
    ShowCriminalFields,
    ShowSourceFields,
    ShowSuspectFields,
    ShowEvidenceFields,
    ShowAddressFields, ShowClientFields, ShowCaseFields, ShowPerformerFields, ShowHumanFields},
  data() {
    return {
      show: false,
      item: null
    }
  },
  methods: {
    closeModal: function () {
      this.show = false
    }
  }
}
</script>

<style scoped
       lang="scss">
.modal-shadow {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.39);
}

.modal {
  background: #fff;
  border-radius: 8px;
  padding: 15px;
  min-width: 420px;
  max-width: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &-close {
    border-radius: 50%;
    color: #fff;
    background: #2a4cc7;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 7px;
    right: 7px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  &-title {
    color: #0971c7;
  }

  &-content {
    margin-bottom: 20px
  }

  &-footer {
    &__button {
      background-color: #0971c7;
      color: #fff;
      border: none;
      text-align: center;
      padding: 8px;
      font-size: 17px;
      font-weight: 500;
      border-radius: 8px;
      min-width: 150px;
    }
  }
}
</style>