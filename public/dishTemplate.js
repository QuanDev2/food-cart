(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['dish'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"dish\">\n  <div class=\"info\">\n    <div class=\"dish-name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"dishName") || (depth0 != null ? lookupProperty(depth0,"dishName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dishName","hash":{},"data":data,"loc":{"start":{"line":3,"column":27},"end":{"line":3,"column":39}}}) : helper)))
    + "</div>\n    <div class=\"seller-name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"seller") || (depth0 != null ? lookupProperty(depth0,"seller") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"seller","hash":{},"data":data,"loc":{"start":{"line":4,"column":29},"end":{"line":4,"column":39}}}) : helper)))
    + "</div>\n    <div class=\"dish-price\">$"
    + alias4(((helper = (helper = lookupProperty(helpers,"price") || (depth0 != null ? lookupProperty(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":5,"column":29},"end":{"line":5,"column":38}}}) : helper)))
    + "</div>\n  </div>\n  <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"imgUrl") || (depth0 != null ? lookupProperty(depth0,"imgUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgUrl","hash":{},"data":data,"loc":{"start":{"line":7,"column":11},"end":{"line":7,"column":21}}}) : helper)))
    + " alt=\"\" />\n  <div class=\"ui compact selection dropdown\">\n    <i class=\"dropdown icon\"></i>\n    <div class=\"text\">Quantity</div>\n    <div class=\"menu\">\n      <div class=\"item\">1</div>\n      <div class=\"item\">2</div>\n      <div class=\"item\">3</div>\n      <div class=\"item\">4</div>\n      <div class=\"item\">5</div>\n    </div>\n  </div>\n</div>";
},"useData":true});
})();