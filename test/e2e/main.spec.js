describe('E2E: main page', function() {
    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.driver.get('http://localhost:8080/index.html');
    });

    describe('Buttons exists', function() {
        it('should be 15', function() {
            expect(element.all(by.css('button.btn')).count()).toBe(15);
        });
    });

    describe('Show notifications', function() {
        it('should be shown notifications', function() {
            var buttons = element.all(by.css('button.btn'));
            buttons.each(function(button) {
                button.click();
            });

            var notifications = element.all(by.css('.ui-notification'));
            expect(notifications.count()).toBe(buttons.count());
        });

    });

    describe('Custom template and scope', function() {
        beforeEach(function() {
            var notifications = element.all(by.css('.ui-notification'));
            notifications.each(function(notification) {
                notification.addClass('killed');
            });
        });

        it('should be the message with custom template', function() {
            element(by.css('button.show-custom')).click();
            expect(element.all(by.css('div.custom-template')).count()).toBe(1);
        });

        it('should trigger click callback in current scope from notification', function(done) {
            element(by.css('button.show-custom')).click();

            setTimeout(function() {
                element(by.css('a.close-notification')).click();

                setTimeout(function() {
                    var clicksLog = element.all(by.css('.elements-count li'));
                    expect(clicksLog.count()).toBe(1);
                    done();
                }, 1000);

            }, 1000);
        });
    });

});

describe("E2E: notification with configuration", function() {
    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.driver.get('http://localhost:8080/notification_config.html');
    });

    describe('Show notifications', function() {
        it('should be shown notifications', function() {
            var buttons = element.all(by.css('button.btn'));
            buttons.each(function(button) {
                button.click();
            });

            var notifications = element.all(by.css('.ui-notification'));
            expect(notifications.count()).toBe(buttons.count());
        });

    });
});