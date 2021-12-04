import React from 'react';
import { LOCALES } from '../i18n/locales';

export const I18nSelect = ({setLanguage}) => {
  return (
    <div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="check_es" onClick={()=>{
          setLanguage(LOCALES.ENGLISH);
          document.getElementById("check_es").checked = true;
          document.getElementById("check_en").checked = false;
          }} />
        <label class="form-check-label" for="check_es">
          English
        </label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="check_en" onClick={()=>{
        setLanguage(LOCALES.SPANISH)
        document.getElementById("check_es").checked = false;
        document.getElementById("check_en").checked = true;
        }}/>
      <label class="form-check-label" for="check_en">
        Spanish
      </label>
    </div>
  </div>
  );
};
