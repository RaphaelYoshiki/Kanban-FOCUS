const cardService = {
    getCardByUid: uid => {
        return firebase.firestore()
        .collection("kanban")
        .doc(uid)
        .get()
        .then(doc => {
            return doc.data()
        })
    },
    remove: uid => {
        return firebase.firestore()
        .collection('kanban')
        .doc(uid)
        .delete()
    },
    save: card => {
        return firebase.firestore()
        .collection('kanban')
        .add(card)
    },
    update: (card, uid) => {
        return firebase.firestore()
        .collection("kanban")
        .doc(uid)
        .update(card)
    },
    updateColumn: cardHTML => {
        return firebase.firestore()
        .collection("kanban")
        .doc(cardHTML.id).update({
            column: cardHTML.parentNode.parentNode.id
        })
    },
    createBatch: () => {
        return firebase.firestore().batch()
    },
    addChangesToBatch: (batch, card) => {
        return batch.update(firebase.firestore().collection("kanban").doc(card.id), { order: card.dataset.order })
    },
    commitBatch: batch => {
        return batch.commit()
    },
}
