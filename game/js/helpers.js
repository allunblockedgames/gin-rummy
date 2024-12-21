if (!Object.keys) {
    Object.keys = function(obj) {
        var keys = [];
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) {
                keys.push(attr);
            }
        }
        return keys;
    }
}

if (!Object.values) {
    Object.values = function(obj) {
        return Object.keys(obj).map(function(key) {
            return obj[key];
        });
    }
}

if (!Object.entries) {
    Object.entries = function(obj) {
        return Object.keys(obj).map(function(key) {
            return [key, obj[key]];
        });
    }
}


function createEvent(eventName) {
    if(typeof(Event) === 'function') {
        var event = new Event(eventName);
    }else{
        var event = document.createEvent('Event');
        event.initEvent(eventName, true, true, undefined);
    }
    return event;
}

Object.defineProperty(window, '_require', {
    get: function(){ return window.require },
    configurable: false
});
