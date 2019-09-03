import { RiseElement } from "rise-common-component/src/rise-element.js";
import { version } from "./rise-play-until-done-version.js";

export default class RisePlayUntilDone extends RiseElement {

  constructor() {
    super();

    this._setVersion( version );
  }

  reportDone() {
    super._sendDoneEvent( true );
  }

}

customElements.define("rise-play-until-done", RisePlayUntilDone);
