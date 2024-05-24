export function convertToSerializeableObject(documentObject) {
  for (const key of Object.keys(documentObject)) {
    if (documentObject[key].toJSON && documentObject[key].toString)
      documentObject[key] = documentObject[key].toString();
  }
  return documentObject;
}
