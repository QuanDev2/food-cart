(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['orderItem'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"item\">\n  <div class=\"ui smaller image\">\n    <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"imgUrl") || (depth0 != null ? lookupProperty(depth0,"imgUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgUrl","hash":{},"data":data,"loc":{"start":{"line":3,"column":13},"end":{"line":3,"column":23}}}) : helper)))
    + " />\n  </div>\n  <div class=\"content\">\n    <div class=\"header\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"dishName") || (depth0 != null ? lookupProperty(depth0,"dishName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dishName","hash":{},"data":data,"loc":{"start":{"line":6,"column":24},"end":{"line":6,"column":36}}}) : helper)))
    + "</div>\n    <div class=\"meta\">\n      <span class=\"price\">$"
    + alias4(((helper = (helper = lookupProperty(helpers,"price") || (depth0 != null ? lookupProperty(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":8,"column":27},"end":{"line":8,"column":36}}}) : helper)))
    + "</span>\n      <span class=\"quantity\">Qty: "
    + alias4(((helper = (helper = lookupProperty(helpers,"quantity") || (depth0 != null ? lookupProperty(depth0,"quantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data,"loc":{"start":{"line":9,"column":34},"end":{"line":9,"column":46}}}) : helper)))
    + "</span>\n    </div>\n  </div>\n</div>";
},"useData":true});
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
    + alias4(((helper = (helper = lookupProperty(helpers,"sellerName") || (depth0 != null ? lookupProperty(depth0,"sellerName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sellerName","hash":{},"data":data,"loc":{"start":{"line":4,"column":29},"end":{"line":4,"column":43}}}) : helper)))
    + "</div>\n    <div class=\"dish-price\">$"
    + alias4(((helper = (helper = lookupProperty(helpers,"price") || (depth0 != null ? lookupProperty(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":5,"column":29},"end":{"line":5,"column":38}}}) : helper)))
    + "</div>\n  </div>\n  <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"imgUrl") || (depth0 != null ? lookupProperty(depth0,"imgUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgUrl","hash":{},"data":data,"loc":{"start":{"line":7,"column":11},"end":{"line":7,"column":21}}}) : helper)))
    + " alt=\"\" />\n  <div class=\"checkout-btn-container\" data-error=\"Error\">\n\n    <div class=\"ui compact selection dropdown qty-dropdown\">\n\n      <i class=\"dropdown icon\"></i>\n      <div class=\"text\">Quantity</div>\n      <div class=\"menu\">\n        <div class=\"item\">1</div>\n        <div class=\"item\">2</div>\n        <div class=\"item\">3</div>\n        <div class=\"item\">4</div>\n        <div class=\"item\">5</div>\n      </div>\n\n    </div>\n    <div class=\"cart-btn ui button blue\" tabindex=\"0\">\n      Add to cart\n    </div>\n  </div>\n</div>";
},"useData":true});
templates['sellerMenu'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"item\" id=\"seller-names\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"sellerName") || (depth0 != null ? lookupProperty(depth0,"sellerName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"sellerName","hash":{},"data":data,"loc":{"start":{"line":1,"column":36},"end":{"line":1,"column":50}}}) : helper)))
    + "</div>";
},"useData":true});
templates['dishMenu'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"item\" id=\"dish-names\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"dishName") || (depth0 != null ? lookupProperty(depth0,"dishName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"dishName","hash":{},"data":data,"loc":{"start":{"line":1,"column":34},"end":{"line":1,"column":46}}}) : helper)))
    + "</div>";
},"useData":true});
})();