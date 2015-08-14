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

describe("E2E: replace notifications", function() {
    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.driver.get('http://localhost:8080/notification_replace.html');
    });

    describe('show all notifications', function() {
        it('should leave only one last message', function(done) {
            var buttons = element.all(by.css('button.btn'));
            buttons.each(function(button) {
                button.click();
            });

            setTimeout(function() {
                var notifications = element.all(by.css('.ui-notification'));
                expect(notifications.count()).toEqual(1);
                done();
            }, 4000);
        });
    });
});

describe("E2E: kill notification", function() {
    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.driver.get('http://localhost:8080/notification_kill.html');
    });

    describe('Show and kill notification', function() {

        it('should kill notification with fadeout', function(done) {
            element(by.css('button.btn.kill-soft')).click();

            setTimeout(function() {
                var notifications = element.all(by.css('.ui-notification'));
                expect(notifications.count()).toEqual(3);
                done();
            }, 6000);
        });

        it('should hard kill notification', function(done) {
            element(by.css('button.btn.kill-hard')).click();

            setTimeout(function() {
                var notifications = element.all(by.css('.ui-notification'));
                expect(notifications.count()).toEqual(3);
                done();
            }, 6000);
        });

    });
});

describe("E2E: custom templates", function() {
    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.driver.get('http://localhost:8080/custom_template.html');
    });

    describe('Show custom templated notifications', function() {

        it('should show 4 notifications (2 types of every template)', function() {
            var buttons = element.all(by.css('button.btn'));
            buttons.each(function(button) {
                button.click();
                button.click();
            });

            expect(element.all(by.css('div.custom-template')).count()).toBe(2);
            expect(element.all(by.css('div.custom-template-overriden')).count()).toBe(2);
        });

    });
});
