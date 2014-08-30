app.directive("debug", function ($compile) {
    return {
        terminal: true,
        priority: 1000000,
        link: function (scope, element) {
            var clone = element.clone();
            element.attr("style", "color:red");
            clone.removeAttr("debug");
            var clonedElement = $compile(clone)(scope);
            element.after(clonedElement);
        }
    }
})