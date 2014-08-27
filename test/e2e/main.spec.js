describe('E2E: main page', function() {
    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.driver.get('file:///mnt/work/PROJECTS/_GITHUB_PROJECTS/angular-ui-notification/demo/index.html');
    });

    describe('Buttons exists', function() {
        it('should be 10', function() {
            expect(element.all(by.css('button.btn')).count()).toBe(10);
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