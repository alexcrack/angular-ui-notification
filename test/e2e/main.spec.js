describe('E2E: main page', function() {
    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.driver.get('http://localhost:8080/index.html');
    });

    describe('Buttons exists', function() {
        it('should be 11', function() {
            expect(element.all(by.css('button.btn')).count()).toBe(11);
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

});