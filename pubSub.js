class PubSub {

    TOPICS = {
        NOTIFICATION_SUCESS: 'NOTIFICATION_SUCESS'
    }

    constructor() {
        this.topics = {};
        this.hOP = this.topics.hasOwnProperty;

    }
}

export const PubSub = new PubSub();