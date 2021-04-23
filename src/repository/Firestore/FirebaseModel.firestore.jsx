import firebase, { firestore } from './Firestore.config';

class FirestoreProviderReply {
  static error;
  static data;
  static message;
  static docRef = null;
  static colRef = null;

  /**
   * @param {*} data Any Data that is Returned From Firestore
   * @param {boolean} error If error is returned
   * @param {String} message Error Message Customized
   * @param {firebase.firestore.DocumentReference} docRef Document Refrence
   * @param {firebase.firestore.CollectionReference} colRef Collection Refence
   */
  constructor(error = true, data = "data", message = "ERROR_OCCURED", docRef = null, colRef = null) {
    this.data = data;
    this.error = error;
    this.docRef = docRef;
    this.colRef = colRef;
    this.message = message;
  }
}

export default class FirestoreProvider {

  /**
   * Get Document Shanshot
   * 
   * Use the `reply.docRef` to start a docRef.snpshot() For
   * updating the data.
   * 
   * @param {String} path
   */
  async getDocumentSnapshot(path) {
    return new Promise(async (resolve, reject) => {
      const docRef = firestore.doc(path);
      docRef.get().then((data) => {
        resolve(new FirestoreProviderReply(false, data, "SUCCESS", docRef, null));
      }).catch((error) => {
        reject(new FirestoreProviderReply(false, error, "ERROR_OCCURED", docRef, null));
      });
    });
  }


}